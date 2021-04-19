import {
  GET_TOPIC_PHOTOS_SUCCESS,
  GET_TOPIC_SUCCESS,
  TOGGLE_LIKE_PHOTO_SUCCESS,
  RESET_TOPIC_PHOTOS,
  GET_TOPIC_REQUEST, GET_TOPIC_FAILED, GET_USER_SUCCESS, GET_USER_REQUEST, GET_USER_PHOTOS_SUCCESS
} from "../actions/general";

const initialState = {
  topic: null,
  topicPhotos: [],
  loading: false,
  user: null,
  userPhotos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOPIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOPIC_SUCCESS:
      return {
        ...state,
        topic: action.data,
        loading: false,
      };
    case GET_TOPIC_FAILED:
      return {
        ...state,
        loading: false,
      };
    case GET_TOPIC_PHOTOS_SUCCESS:
      return {
        ...state,
        topicPhotos: [...state.topicPhotos, ...action.data]
      };
    case TOGGLE_LIKE_PHOTO_SUCCESS:
      return {
        ...state,
        topicPhotos: action.data
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
      };
    case GET_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        userPhotos: [...state.userPhotos, ...action.data],
      };
    case RESET_TOPIC_PHOTOS:
      return {
        ...state,
        topicPhotos: []
      };

    default:
      return state;
  }
}