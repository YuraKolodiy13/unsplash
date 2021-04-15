import {GET_TOPIC_SUCCESS, GET_TOPICS_SUCCESS} from "../actions/general";

const initialState = {
  topics: [],
  topic: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        topics: action.data
      };
    case GET_TOPIC_SUCCESS:
      return {
        ...state,
        topic: action.data
      };

    default:
      return state;
  }
}