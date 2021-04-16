import {GET_TOPIC_PHOTOS_SUCCESS, GET_TOPIC_SUCCESS, LIKE_PHOTO_SUCCESS, RESET_TOPIC_PHOTOS} from "../actions/general";

const initialState = {
  topic: {},
  topicPhotos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOPIC_SUCCESS:
      return {
        ...state,
        topic: action.data
      };
    case GET_TOPIC_PHOTOS_SUCCESS:
      return {
        ...state,
        topicPhotos: [...state.topicPhotos, ...action.data]
      };
    case LIKE_PHOTO_SUCCESS:
      return {
        ...state,
        topicPhotos: action.data
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