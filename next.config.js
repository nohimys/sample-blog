const {PHASE_PRODUCTION_BUILD} = require('next/constants');
const {CLUSTER_ADDRESS, MONGODB_USERNAME, MONGODB_PASSWORD} = require("./creds");


/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
    const config = {
        reactStrictMode: true,
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'miro.medium.com',
                    port: '',
                    pathname: '/v2/resize:fit:2400/1*AFABlTwUYwBJNYGTURmfXw.jpeg',
                },
            ],
        },
        env: {
            cluster_address: CLUSTER_ADDRESS,
            mongodb_username: MONGODB_USERNAME,
            mongodb_password: MONGODB_PASSWORD
        }
    };

    if(phase === PHASE_PRODUCTION_BUILD){
      return {
        ...config,
        env: {
          cluster_address: 'prod-address',
          mongodb_username: 'prod-username',
          mongodb_password: 'prod-password'
        }
      }
    }

    return config
}

module.exports = nextConfig
