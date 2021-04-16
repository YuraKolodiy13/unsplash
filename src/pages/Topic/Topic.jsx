import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getTopicPhotosRequest,
  getTopicRequest,
  resetTopicPhotos,
  toggleLikePhotoRequest
} from "../../actions/general";
import {Link, useParams} from "react-router-dom";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './Topic.scss'
import {Gallery, Item} from 'react-photoswipe-gallery'
import InfiniteScroll from 'react-infinite-scroll-component';
import {ReactComponent as LikeIcon} from '../../assets/images/like.svg';
import Tooltip from "@material-ui/core/Tooltip";
import Loader from "../../components/Loader/Loader";

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

  const toggleLike = (e, liked, id) => {
    e.stopPropagation();
    dispatch(toggleLikePhotoRequest({liked, id}));
  };

  if(loading) return <Loader/>;

  return (
    <div className='TopicPage'>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>

      <Gallery>
        <div className="grid-gallery">
          <InfiniteScroll
            dataLength={topicPhotos.length}
            next={() => dispatch(getTopicPhotosRequest({topic: slug, page: topicPhotos.length / 10 + 1}))}
            hasMore={topic.total_photos > topicPhotos.length}
            loader={<div className="loader" />}
          >
            {topicPhotos.map(item =>
              <Item
                key={item.id}
                original={item.urls.full}
                thumbnail={item.urls.small}
                width={item.width}
                height={item.height}
              >
                {({ ref, open }) => (
                  <div className="destination" ref={ref} onClick={open} style={{backgroundImage: `url(${item.urls.small})`}}>
                    <div className="overlay">
                      <div className="user">
                        <img src={item.user.profile_image.small} alt=""/>
                        <Link to={`/users/${item.user.username}`}>{item.user.name}</Link>
                      </div>
                      <div className="actions">
                        <div
                          className={`like ${item.liked_by_user ? 'active': ''}`}
                          onClick={(e) => toggleLike(e, item.liked_by_user, item.id)}
                        >
                          <Tooltip title={`${item.liked_by_user ? 'Unlike' : 'Like'}`}>
                            <LikeIcon fill='red'/>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Item>
            )}
          </InfiniteScroll>
        </div>
      </Gallery>
    </div>
  )
};

export default Topic;