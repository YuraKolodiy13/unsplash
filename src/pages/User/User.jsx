import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getUserPhotosRequest, getUserRequest} from "../../actions/general";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import './User.scss';
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";

const User = () => {

  const dispatch = useDispatch();
  const {username} = useParams();
  const loading = useSelector(state => state.general.loading);
  const user =  useSelector(state => state.general.user);
  const userPhotos =  useSelector(state => state.general.userPhotos);
  // const user = JSON.parse(localStorage.getItem('user'));
  // const userPhotos = JSON.parse(localStorage.getItem('userPhotos'));

  useEffect(() => {
    dispatch(getUserRequest(username))
  }, [dispatch, username]);

  if(loading || !user) return <Loader/>;

  return (
    <div className='User'>
      <div className="user-detail">
        <div className="user-img">
          <img src={user.profile_image.large} alt=""/>
        </div>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          {user.for_hire && (
            <div className='user-for-hire'>
              <svg width="32" height="32" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                <path d="M16.3 3C9 3 3 9 3 16.3C3 23.6 9 29.6 16.3 29.6C23.7 29.6 29.6 23.6 29.6 16.3C29.6 9 23.7 3 16.3 3ZM13.8 22.6L8.7 17.5L10.7 15.5L13.8 18.6L21.6 10.8L23.6 12.8L13.8 22.6Z"/>
              </svg>
              Available for hire
            </div>
          )}
          {user.location && (
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1998 10.9C18.6998 8.49998 18.0998 5.99998 16.6998 3.99998C14.9998 1.49998 12.1998 0.0999756 9.29981 0.0999756C6.29981 0.0999756 3.49981 1.49998 1.79981 3.99998C0.0998098 6.39998 -0.30019 9.49998 0.79981 12.3C1.09981 13.1 1.49981 13.8 2.09981 14.5L8.69981 22.2C8.89981 22.4 9.09981 22.5 9.29981 22.5C9.49981 22.5 9.69981 22.4 9.89981 22.2L11.2998 20.6C11.3998 20.5 11.4998 20.4 11.4998 20.3C13.0998 23.5 17.0998 24.8 20.2998 23.2C23.4998 21.6 24.7998 17.6 23.1998 14.4C22.1998 12.4 20.2998 11.1 18.1998 10.9ZM9.19981 20.5L3.19981 13.5C2.79981 13 2.39981 12.4 2.19981 11.8C0.79981 7.89998 2.79981 3.59998 6.59981 2.19998C7.39981 1.89998 8.29981 1.69998 9.19981 1.69998C11.5998 1.69998 13.8998 2.89998 15.2998 4.89998C16.4998 6.59998 16.9998 8.79997 16.4998 10.9C13.1998 11.3 10.6998 14.1 10.6998 17.4C10.6998 17.8 10.6998 18.2 10.7998 18.6L9.19981 20.5ZM17.2998 22.3C14.4998 22.3 12.2998 20.1 12.2998 17.3C12.2998 14.5 14.4998 12.3 17.2998 12.3C20.0998 12.3 22.2998 14.5 22.2998 17.3C22.2998 20.1 20.0998 22.3 17.2998 22.3ZM13.5998 9.09998C13.5998 6.69998 11.5998 4.69998 9.1998 4.69998C6.7998 4.69998 4.7998 6.69998 4.7998 9.09998C4.7998 11.5 6.7998 13.5 9.1998 13.5C11.6998 13.5 13.5998 11.6 13.5998 9.09998ZM9.2998 12C7.6998 12 6.4998 10.7 6.4998 9.19998C6.4998 7.69998 7.7998 6.39998 9.2998 6.39998C10.7998 6.39998 12.0998 7.69998 12.0998 9.19998C12.0998 10.7 10.7998 12 9.2998 12ZM15.8999 19.9C16.1999 20.2 16.6999 20.2 16.9999 19.9L20.4999 16.5C20.5999 16.3 20.6999 16.1 20.6999 15.9C20.6999 15.7 20.5999 15.4 20.4999 15.3C20.1999 15 19.6999 15 19.3999 15.3L16.5999 18.1C16.4999 18.2 16.3999 18.2 16.2999 18.1L15.2999 17.1C14.9999 16.8 14.4999 16.8 14.1999 17.1C13.8999 17.4 13.8999 17.9 14.1999 18.2L15.8999 19.9Z" fill="#030303"/>
              </svg>
              {user.location}
            </div>
          )}
          {user.portfolio_url && <p>{user.portfolio_url}</p>}
          <p>Interests</p>
          <ul>
            {user.tags.custom.map(item =>
              <li key={item.title}>{item.title}</li>
            )}
          </ul>
        </div>
      </div>
      <GalleryGrid
        photos={userPhotos}
        owner={user}
        getNewPhotos={() => dispatch(getUserPhotosRequest({username: username, page: userPhotos.length / 10 + 1}))}
      />
    </div>
  )
};

export default User;