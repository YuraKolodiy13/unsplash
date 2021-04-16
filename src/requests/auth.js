import service from './service';

export const loginApi = (code) => {
  return service.post(
    `https://unsplash.com/oauth/token`, {
      client_id: 'NfK4FDbc4gxGSFprbRllC3RDxtB-kDK4KYvsvVlSQZM',
      client_secret: 'J_LUEcpEt-88nWIjfwPvyDTLBpeTVJCvIElpCi2ebUg',
      redirect_uri: 'http://localhost:3000/',
      code: code.slice(6),
      grant_type: 'authorization_code'
    }
  )
};