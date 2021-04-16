import React from "react";

const Login = () => {

  return (
    <div>
      Login

      {/*<a href="https://unsplash.com/oauth/authorize?client_id=NfK4FDbc4gxGSFprbRllC3RDxtB-kDK4KYvsvVlSQZM&redirect_uri=http://fir-89ca2.web.app/">click to login</a>*/}
      <a target='_blank' rel="noreferrer" href="https://unsplash.com/oauth/authorize?client_id=NfK4FDbc4gxGSFprbRllC3RDxtB-kDK4KYvsvVlSQZM&redirect_uri=http://localhost:3000/&response_type=code&scope=public+read_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections">click to login</a>
    </div>
  )
};

export default Login;