var moment = require('moment');

exports.StkPushPasskeyEncoding = function (shortcode, plainPasskey)
{
    let timestamp = moment().format("YYYYMMDDhhmmss");
    let fullString = shortcode + plainPasskey + timestamp;
    let base64 = Buffer.from(fullString).toString("base64");
    return {
        password: base64,
        timestamp: timestamp
    };
}
