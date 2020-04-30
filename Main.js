let stk = require("./src/StkPushPasskeyEncoding");
let header = require("./src/ApiAuthenticationHeaderEncoding")
let encryption = require("./src/InitiatorPasswordEncryption")

var stkDetails = stk.StkPushPasskeyEncoding("174379", "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919");
console.log(stkDetails.password + ", " + stkDetails.timestamp + "\n");

var headerDetails = header.ApiAuthenticationHeaderEncoding("mVjAxwuJd2xwtAFfaI6tjuffBNHCvVAi", "14HKuEbrj01psKRa");
console.log(headerDetails + "\n");
