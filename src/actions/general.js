import {defaultActionCreator} from "./actionCreator";

export const GET_TOPIC_REQUEST = 'GET_TOPIC_REQUEST';
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS';
export const GET_TOPIC_FAILED = 'GET_TOPIC_FAILED';
export const getTopicRequest = defaultActionCreator(GET_TOPIC_REQUEST, 'data');

export const GET_TOPIC_PHOTOS_REQUEST = 'GET_TOPIC_PHOTOS_REQUEST';
export const GET_TOPIC_PHOTOS_SUCCESS = 'GET_TOPIC_PHOTOS_SUCCESS';
export const GET_TOPIC_PHOTOS_FAILED = 'GET_TOPIC_PHOTOS_FAILED';
export const getTopicPhotosRequest = defaultActionCreator(GET_TOPIC_PHOTOS_REQUEST, 'data');

export const LIKE_PHOTO_REQUEST = 'LIKE_PHOTO_REQUEST';
export const LIKE_PHOTO_SUCCESS = 'LIKE_PHOTO_SUCCESS';
export const LIKE_PHOTO_FAILED = 'LIKE_PHOTO_FAILED';
export const likePhotoRequest = defaultActionCreator(LIKE_PHOTO_REQUEST, 'data');

export const RESET_TOPIC_PHOTOS = 'RESET_TOPIC_PHOTOS';
export const resetTopicPhotos = defaultActionCreator(RESET_TOPIC_PHOTOS, 'data');