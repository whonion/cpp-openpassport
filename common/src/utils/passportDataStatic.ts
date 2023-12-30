import { PassportData } from "./types";


// export const samplePassportData = {
//   "mrz":"P<FRADUPONT<<ALPHONSE<HUGUES<ALBERT<<<<<<<<<24HB818324FRA0402111M3111115<<<<<<<<<<<<<<02",
//   "signatureAlgorithm":"SHA256withRSA",
//   "pubKey":{"modulus":"23888868778173347140481234000963156616284273140757816719157077917735538530757340038205500437738602133559488085922983119518684969861218165409837105590815029440129459776131096873064823297554337974548918913858347301079938035753126740567177320093699803858010740320870288240107567575684958821484194744790758000862900528760288751492430906208911790682172824048349846581080841672237438560888360890590861557467676221945304164808964210416920598197754027808692722582687294401643988041595544516234726119965721890943034047806349247196898097390278148659720306928888189819905206169903117713636197189104023913635156808344687406773523"},
//   "dataGroupHashes":[[1,[-80,-33,31,-123,108,84,-98,102,70,11,-91,-81,-60,12,-55,-126,25,-125,46,125,-100,-62,28,23,55,-123,-99,-92,-121,-120,-36,78]],[2,[-66,82,-76,-21,-34,33,79,50,-104,-120,-114,35,116,-32,6,-14,-100,-115,-128,-8,10,61,98,86,-8,45,-49,-46,90,-24,-81,38]],[3,[0,-62,104,108,-19,-10,97,-26,116,-58,69,110,26,87,17,89,110,-57,108,-6,36,21,39,87,110,102,-6,-43,-82,-125,-85,-82]],[11,[-120,-101,87,-112,111,15,-104,127,85,25,-102,81,20,58,51,75,-63,116,-22,0,60,30,29,30,-73,-115,72,-9,-1,-53,100,124]],[12,[41,-22,106,78,31,11,114,-119,-19,17,92,71,-122,47,62,78,-67,-23,-55,-42,53,4,47,-67,-55,-123,6,121,34,-125,64,-114]],[13,[91,-34,-46,-63,62,-34,104,82,36,41,-118,-3,70,15,-108,-48,-100,45,105,-85,-15,-61,-71,43,-39,-94,-110,-55,-34,89,-18,38]],[14,[76,123,-40,13,51,-29,72,-11,59,-63,-18,-90,103,49,23,-92,-85,-68,-62,-59,-100,-69,-7,28,-58,95,69,15,-74,56,54,38]]],
//   "eContent":[49,102,48,21,6,9,42,-122,72,-122,-9,13,1,9,3,49,8,6,6,103,-127,8,1,1,1,48,28,6,9,42,-122,72,-122,-9,13,1,9,5,49,15,23,13,49,57,49,50,49,54,49,55,50,50,51,56,90,48,47,6,9,42,-122,72,-122,-9,13,1,9,4,49,34,4,32,32,85,108,-82,127,112,-78,-74,8,43,-122,123,-64,-45,-125,66,-72,-16,-44,-75,-16,-76,106,-61,24,117,54,-127,19,10,-6,53],
//   "encryptedDigest":[35,76,28,227,212,141,111,134,230,196,96,116,211,137,66,36,193,89,118,85,247,107,239,228,229,86,134,71,247,88,48,232,173,172,80,223,44,146,97,248,103,82,33,114,87,80,255,13,24,129,48,30,162,233,32,107,108,229,199,248,215,187,5,72,112,185,114,80,178,117,203,63,6,231,104,72,89,158,77,232,82,147,35,57,119,151,60,235,210,216,86,76,164,16,203,111,60,20,0,100,174,175,95,8,150,248,65,207,55,251,206,141,26,30,49,218,160,56,92,45,212,121,61,231,174,175,171,234,83,17,225,249,52,208,223,8,234,208,152,168,146,187,0,80,25,235,145,196,157,113,38,65,71,214,143,36,82,212,45,0,242,120,73,54,24,115,24,157,188,79,59,60,202,74,129,47,245,202,141,15,135,7,34,18,56,24,85,173,125,205,71,127,103,236,77,176,100,35,59,179,123,84,158,84,195,113,98,202,218,2,1,170,194,243,245,174,205,102,28,118,156,57,106,37,244,45,174,157,202,217,38,179,126,94,205,74,100,64,225,183,145,157,148,213,45,228,170,122,190,239,11,135,24,239,17,252]
// } as PassportData // not working for some reason
export const samplePassportData = {
  "mrz":"P<FRADUPONT<<ALPHONSE<HUGUES<ALBERT<<<<<<<<<24HB818324FRA0402111M3111115<<<<<<<<<<<<<<02",
  "signatureAlgorithm":"SHA256withRSA",
  "pubKey":{"modulus":"27753994424842443894245786782525308860959074811630074275687092737154570193632490725867032155150260554771168206321835563490551248035290893473617891334580992862631549002795628558031117970107680315966672387663922543753771000203286710765623272481585597066810453899915515725100524233057337421264922943787074825558632263475983266815680559554396939901695379704841007360145443136768496914184384265135937789216999239019764915126071941382094849289770921106079335274789472186657871647693785381678061690538186504807895527639676843719555029569743949997938238439702614424217784475162038335863063315103644827846898314629359021121163"},
  "dataGroupHashes":[[1,[-80,-33,31,-123,108,84,-98,102,70,11,-91,-81,-60,12,-55,-126,25,-125,46,125,-100,-62,28,23,55,-123,-99,-92,-121,-120,-36,78]],[2,[-66,82,-76,-21,-34,33,79,50,-104,-120,-114,35,116,-32,6,-14,-100,-115,-128,-8,10,61,98,86,-8,45,-49,-46,90,-24,-81,38]],[3,[0,-62,104,108,-19,-10,97,-26,116,-58,69,110,26,87,17,89,110,-57,108,-6,36,21,39,87,110,102,-6,-43,-82,-125,-85,-82]],[11,[-120,-101,87,-112,111,15,-104,127,85,25,-102,81,20,58,51,75,-63,116,-22,0,60,30,29,30,-73,-115,72,-9,-1,-53,100,124]],[12,[41,-22,106,78,31,11,114,-119,-19,17,92,71,-122,47,62,78,-67,-23,-55,-42,53,4,47,-67,-55,-123,6,121,34,-125,64,-114]],[13,[91,-34,-46,-63,62,-34,104,82,36,41,-118,-3,70,15,-108,-48,-100,45,105,-85,-15,-61,-71,43,-39,-94,-110,-55,-34,89,-18,38]],[14,[76,123,-40,13,51,-29,72,-11,59,-63,-18,-90,103,49,23,-92,-85,-68,-62,-59,-100,-69,-7,28,-58,95,69,15,-74,56,54,38]]],
  "eContent":[49,102,48,21,6,9,42,-122,72,-122,-9,13,1,9,3,49,8,6,6,103,-127,8,1,1,1,48,28,6,9,42,-122,72,-122,-9,13,1,9,5,49,15,23,13,49,57,49,50,49,54,49,55,50,50,51,56,90,48,47,6,9,42,-122,72,-122,-9,13,1,9,4,49,34,4,32,32,85,108,-82,127,112,-78,-74,8,43,-122,123,-64,-45,-125,66,-72,-16,-44,-75,-16,-76,106,-61,24,117,54,-127,19,10,-6,53],
  "encryptedDigest":[75,38,146,115,39,182,117,54,54,210,123,175,120,2,192,161,4,95,215,96,181,238,178,2,228,31,135,28,151,187,17,28,127,71,108,224,207,180,75,237,108,85,103,115,141,94,95,117,167,89,69,182,24,100,154,168,188,176,221,182,102,174,113,187,207,82,146,21,124,207,87,239,148,209,129,187,247,245,50,37,208,152,209,204,42,219,163,63,138,79,73,229,179,58,208,232,48,43,203,122,160,37,19,213,231,179,165,204,124,143,157,198,110,230,138,9,115,93,85,94,12,120,44,206,93,27,52,240,142,103,10,199,221,189,229,43,157,129,187,187,248,12,219,186,145,147,226,177,111,180,87,107,27,222,110,92,246,176,123,17,201,118,4,217,246,248,15,22,255,75,42,101,189,203,22,253,197,91,227,187,206,2,106,14,154,222,145,202,15,106,237,158,254,79,244,234,118,5,245,212,45,45,217,170,144,93,44,129,190,180,33,13,123,120,145,100,157,198,178,177,197,93,2,62,2,49,197,23,198,150,249,19,118,239,22,211,116,205,101,141,250,21,19,229,26,201,241,226,109,249,221,9,20,242,21,250]
}
