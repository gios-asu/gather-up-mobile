/** 
 * Encrypt the given payload with the given public key
 */
EncryptSignInCommand = function () {
  var _encrypt = new JSEncrypt();

  /**
   * Encrypt the payload with the given public key
   *
   * @param  String publicKey The RSA public key
   * @param  String payload   The JSON String payload to encrypt
   * @return String           The encrypted String
   */
  var handle = function(publicKey, payload) {
    _encrypt.setPublicKey(publicKey);

    var encrypted = _encrypt.encrypt(payload);

    return encrypted;
  };

  return {
    handle: handle
  };
};
