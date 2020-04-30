exports.ApiAuthenticationHeaderEncoding = function (consumerKey, consumerSecret)
{
    let fullString = consumerKey + ":" + consumerSecret;
    let base64 = Buffer.from(fullString).toString("base64");
    return base64;
}
