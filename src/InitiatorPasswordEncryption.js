require("./jsencrypt.js");

/**
 * Note: the code below will not work outside a browser context. Still checking into it...
 *
 * For Javascript, I first had to extract the the public key from the certificate. This is done using the openssl
 * command below:
 *
 * <code>openssl x509 -pubkey -noout -in [your cert here] > broker.pem</code>
 *
 * If you can find a way to do it without the above process, the better.
 *
 * @param plaintext
 * @returns {string}
 * @constructor
 */
exports.InitiatorPasswordEncryption = function (plaintext)
{
    var crypt = new JSEncrypt();
    crypt.setKey("-----BEGIN PUBLIC KEY-----" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqLcFdVcV7HdEOotsNLoM" +
        "PhD74CX1ejzcgfNuiJNy9pTySxbszRBCWxmok3Unul4rX/zyVD/6vDb9nbqRywZI" +
        "gR46UOn+tR3vGXXPX6igxgS6DYTaQV8W858yOGLuoYwRi5xeQJfczAMU4o+sCxlB" +
        "bMCqYs4nzW81fi8iF2OEUdrfJcbamhSnksdgfD/nomWy9MESAz1QufrOBnaRX2N0" +
        "CKsi8SNmzsghpfP15VLiIVV8YXPFKtd9sY37FpY28OKGjKG5wdije/bzFL8qEcPD" +
        "hqYGuVaGkhX1bkI0iH+UcFtYYrZv/Fyb5jRHXmNLiq4mMG0fMH8ENxNACFtRZTDI" +
        "IQIDAQAB" +
        "-----END PUBLIC KEY-----");

    var cipher = crypt.encrypt(plaintext);
    return cipher;
}
