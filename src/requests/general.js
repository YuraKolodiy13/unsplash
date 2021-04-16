import service from './service';
import {API_URL, CLIENT_ID} from "../helpers/constants";

export const getTopicApi = (topic) => {
  return service.get(
    `${API_URL}topics/${topic}?client_id=${CLIENT_ID}`,
  )
};

export const getTopicPhotosApi = ({topic, page = 1}) => {
  return service.get(
    `${API_URL}topics/${topic}/photos?page=${page}&client_id=${CLIENT_ID}`,
  )
};

export const likePhotoApi = (id) => {
  return service.post(
    `${API_URL}/photos/${id}/like`,
  )
};