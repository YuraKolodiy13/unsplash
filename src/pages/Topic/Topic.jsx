import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getTopicPhotosRequest,
  getTopicRequest,
  resetTopicPhotos,
} from "../../actions/general";
import {useParams} from "react-router-dom";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './Topic.scss'
import Loader from "../../components/Loader/Loader";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";

const Topic = () => {

  const dispatch = useDispatch();
  const {slug} = useParams();
  const topic = useSelector(state => state.general.topic);
  const topicPhotos = useSelector(state => state.general.topicPhotos);
  const loading = useSelector(state => state.general.loading);

  useEffect(() => {
    if(!!topicPhotos.length) dispatch(resetTopicPhotos());
    dispatch(getTopicRequest(slug));
    dispatch(getTopicPhotosRequest({topic: slug}));
  }, [slug]); // eslint-disable-line

  if(loading) return <Loader/>;

  return (
    <div className='TopicPage'>

      {topic
        ? <>
            <h1>{topic.title}</h1>
            <p>{topic.description}</p>

            <GalleryGrid
              photos={topicPhotos}
              owner={topic}
              getNewPhotos={() => dispatch(getTopicPhotosRequest({topic: slug, page: topicPhotos.length / 10 + 1}))}
            />
          </>
        : <p>Sorry, but Rate Limit Exceeded</p>
      }

    </div>
  )
};

export default Topic;