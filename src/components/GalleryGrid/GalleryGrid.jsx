import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {toggleLikePhotoRequest} from "../../actions/general";
import {Gallery, Item} from "react-photoswipe-gallery";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import {ReactComponent as LikeIcon} from "../../assets/images/like.svg";
import {useDispatch} from "react-redux";
import './GalleryGrid.scss'

const GalleryGrid = ({photos, owner, getNewPhotos}) => {

  const dispatch = useDispatch();

  const toggleLike = (e, liked, id) => {
    e.stopPropagation();
    dispatch(toggleLikePhotoRequest({liked, id}));
  };

  return (
    <div className='GalleryGrid'>
      <Gallery>
        <div className="grid-gallery">
          <InfiniteScroll
            dataLength={photos.length}
            next={getNewPhotos}
            hasMore={owner.total_photos > photos.length}
            loader={<div className="loader" />}
          >
            {photos.map(item =>
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

export default GalleryGrid;