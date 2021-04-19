import {defaultActionCreator} from "./actionCreator";

export const GET_TOPIC_REQUEST = 'GET_TOPIC_REQUEST';
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS';
export const GET_TOPIC_FAILED = 'GET_TOPIC_FAILED';
export const getTopicRequest = defaultActionCreator(GET_TOPIC_REQUEST, 'data');

export const GET_TOPIC_PHOTOS_REQUEST = 'GET_TOPIC_PHOTOS_REQUEST';
export const GET_TOPIC_PHOTOS_SUCCESS = 'GET_TOPIC_PHOTOS_SUCCESS';
export const GET_TOPIC_PHOTOS_FAILED = 'GET_TOPIC_PHOTOS_FAILED';
export const getTopicPhotosRequest = defaultActionCreator(GET_TOPIC_PHOTOS_REQUEST, 'data');

export const TOGGLE_LIKE_PHOTO_REQUEST = 'TOGGLE_LIKE_PHOTO_REQUEST';
export const TOGGLE_LIKE_PHOTO_SUCCESS = 'TOGGLE_LIKE_PHOTO_SUCCESS';
export const TOGGLE_LIKE_PHOTO_FAILED = 'TOGGLE_LIKE_PHOTO_FAILED';
export const toggleLikePhotoRequest = defaultActionCreator(TOGGLE_LIKE_PHOTO_REQUEST, 'data');

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const getUserRequest = defaultActionCreator(GET_USER_REQUEST, 'data');

export const GET_USER_PHOTOS_REQUEST = 'GET_USER_PHOTOS_REQUEST';
export const GET_USER_PHOTOS_SUCCESS = 'GET_USER_PHOTOS_SUCCESS';
export const GET_USER_PHOTOS_FAILED = 'GET_USER_PHOTOS_FAILED';
export const getUserPhotosRequest = defaultActionCreator(GET_USER_PHOTOS_REQUEST, 'data');

export const RESET_TOPIC_PHOTOS = 'RESET_TOPIC_PHOTOS';
export const resetTopicPhotos = defaultActionCreator(RESET_TOPIC_PHOTOS, 'data');