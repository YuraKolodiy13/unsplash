import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {loginRequest} from "../../actions/auth";
import {useDispatch} from "react-redux";

const Home = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if(history.location.search){
      dispatch(loginRequest(history.location.search))
    }
  }, []);

  return (
    <div>
      Home
    </div>
  )
};

export default Home;