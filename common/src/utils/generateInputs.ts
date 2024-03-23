import { MAX_DATAHASHES_LEN, SignatureAlgorithm, TREE_DEPTH } from "../constants/constants";
import { assert, sha256Pad } from "./sha256Pad";
import { PassportData } from "./types";
import { arraysAreEqual, bytesToBigDecimal, formatMrz, formatSigAlg, hash, splitToWords, toUnsignedByte, getCurrentDateYYMMDD } from "./utils";
import { IMT } from "@zk-kit/imt";
import { getLeaf } from "./pubkeyTree";
import serializedTree from "../../pubkeys/serialized_tree.json";
import { poseidon2 } from "poseidon-lite";

export function generateCircuitInputs(
  passportData: PassportData,
  reveal_bitmap: string[],
  address: string,
  options: {developmentMode?: boolean} = {developmentMode: false}
) {
  const tree = new IMT(poseidon2, TREE_DEPTH, 0, 2)
  tree.setNodes(serializedTree)

  if (options.developmentMode) {
    // This adds the pubkey of the passportData to the registry so that it's always found for testing purposes.
    tree.insert(getLeaf({
      signatureAlgorithm: passportData.signatureAlgorithm,
      issuer: 'C = TS, O = Government of Syldavia, OU = Ministry of tests, CN = CSCA-TEST',
      modulus: passportData.pubKey.modulus,
      exponent: passportData.pubKey.exponent
    }).toString())
  }

  const formattedMrz = formatMrz(passportData.mrz);

  const concatenatedDataHashesHashDigest = hash(passportData.dataGroupHashes);
  console.log('concatenatedDataHashesHashDigest', concatenatedDataHashesHashDigest);

  assert(
    arraysAreEqual(passportData.eContent.slice(72, 72 + 32), concatenatedDataHashesHashDigest),
    'concatenatedDataHashesHashDigest is at the right place in passportData.eContent'
  )

  console.log('passportData.pubKey.exponent', passportData.pubKey.exponent)
  
  const sigAlgFormatted = formatSigAlg(
    passportData.signatureAlgorithm,
    passportData.pubKey.exponent
  )

  const leaf = getLeaf({
    signatureAlgorithm: passportData.signatureAlgorithm,
    ...passportData.pubKey,
  }).toString()
  console.log('leaf', leaf)
  
  const index = tree.indexOf(leaf) // this index is not the index in public_keys_parsed.json, but the index in the tree
  console.log(`Index of pubkey in the registry: ${index}`)
  if (index === -1) {
    throw new Error("Pubkey not found in the registry");
  }

  const proof = tree.createProof(index)
  console.log("verifyProof", tree.verifyProof(proof))

  const [messagePadded, messagePaddedLen] = sha256Pad(
    new Uint8Array(passportData.dataGroupHashes),
    MAX_DATAHASHES_LEN
  );

  // don't forget to wrap everything in arrays for mopro bindings
  return {
    mrz: formattedMrz.map(byte => String(byte)),
    reveal_bitmap: reveal_bitmap.map(byte => String(byte)),
    dataHashes: Array.from(messagePadded).map((x) => x.toString()),
    datahashes_padded_length: [messagePaddedLen.toString()],
    eContentBytes: passportData.eContent.map(toUnsignedByte).map(byte => String(byte)),
    signature: splitToWords(
      BigInt(bytesToBigDecimal(passportData.encryptedDigest)),
      BigInt(64),
      BigInt(32)
    ),
    signatureAlgorithm: [SignatureAlgorithm[sigAlgFormatted].toString()],
    pubkey: splitToWords(
      BigInt(passportData.pubKey.modulus as string),
      BigInt(64),
      BigInt(32)
    ),
    pathIndices: proof.pathIndices.map(index => index.toString()),
    siblings: proof.siblings.flat().map(index => index.toString()),
    root: [tree.root.toString()],
    address: [BigInt(address).toString()],
    // current_date: current_date,
    // majority: majority.map(byte => String(byte)),
    majority: [BigInt(49).toString(), BigInt(56).toString()],
    current_date: getCurrentDateYYMMDD().map(datePart => BigInt(datePart).toString()),
  }
}