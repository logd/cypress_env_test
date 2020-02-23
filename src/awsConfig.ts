interface CognitoConfig {
    userPoolId?: string;
    identityPoolId?: string;
    userPoolWebClientId?: string;
}

interface AWSConfig {
    dev: {
        cognito: CognitoConfig;
    };
    prod: {
        cognito: CognitoConfig;
    }
}
export const AWS_CONFIG: AWSConfig = {
    dev: {
        cognito: {
            userPoolId: process.env.REACT_APP_USER_POOL_ID_DEV,
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_DEV,
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_DEV
        }
    },
    prod: {
        cognito: {
            userPoolId: process.env.REACT_APP_USER_POOL_ID_PROD,
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_PROD,
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_PROD
        }
    }
}


