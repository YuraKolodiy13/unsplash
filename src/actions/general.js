import {defaultActionCreator} from "./actionCreator";

export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
export const GET_TOPICS_FAILED = 'GET_TOPICS_FAILED';
export const getTopicsRequest = defaultActionCreator(GET_TOPICS_REQUEST, 'data');

export const GET_TOPIC_REQUEST = 'GET_TOPIC_REQUEST';
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS';
export const GET_TOPIC_FAILED = 'GET_TOPIC_FAILED';
export const getTopicRequest = defaultActionCreator(GET_TOPIC_REQUEST, 'data');
