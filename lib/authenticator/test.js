'use strict';

var Authenticator = require('./');

class TestAuthenticator extends Authenticator {


    constructor() {
        super();
    }

    canRead(user, repo, authorization) {
        return new Promise(function(resolve) {
            resolve(TestAuthenticator.CAN_READ);
        });
    }

    canWrite(user, repo, authorization) {
        return new Promise(function(resolve) {
            resolve(TestAuthenticator.CAN_WRITE);
        });
    }

    checkSSHAuthorization(publicAlgo, publicData, signAlgo, blob, signature){
        return new Promise(function(resolve) {
            if (TestAuthenticator.SSH_VALID) {
                resolve('TEST');
            } else {
                resolve();
            }

        });

    }


}

TestAuthenticator.CAN_READ = true;
TestAuthenticator.CAN_WRITE = true;
TestAuthenticator.SSH_VALID = true;


module.exports = TestAuthenticator;