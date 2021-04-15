import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTopicRequest} from "../../actions/general";
import {useParams} from "react-router-dom";

const Topic = () => {

  const dispatch = useDispatch();
  const {slug} = useParams();
  const topic = useSelector(state => state.general.topic);

  useEffect(() => {
    dispatch(getTopicRequest(slug));
  }, [slug]);


  return (
    <div>
      <h1>{topic.title}</h1>
    </div>
  )
};

export default Topic;