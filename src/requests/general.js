import service from './service';
import {API_URL, CLIENT_ID} from "../helpers/constants";

export const getTopicsApi = () => {
  return service.get(
    `${API_URL}topics/?per_page=100&client_id=${CLIENT_ID}`,
  )
};
export const getTopicApi = (topic) => {
  return service.get(
    `${API_URL}topics/${topic}?client_id=${CLIENT_ID}`,
  )
};