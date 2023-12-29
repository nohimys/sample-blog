const {PHASE_PRODUCTION_BUILD} = require('next/constants');


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
            cluster_address: '',
            mongodb_username: '',
            mongodb_password: ''
        }
    };

    // Even though this is a possible approach, this is not actually used here
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
