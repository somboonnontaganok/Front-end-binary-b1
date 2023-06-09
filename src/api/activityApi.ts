import axios from "axios";


// const SERVER = "https://back-end-binary-b1.onrender.com";
const SERVER = import.meta.env.VITE_BACKEND_SERVER

export const getActivities = async () => {
  // code down below
  const response = await axios.get(`${SERVER}/activities`);
  const body = response.data;
  return body;
};

export const createActivities = async (body) => {
  // code down below
  const response = await axios.post(`${SERVER}/activities`, body);
  // alert(response.data);
  alert('Create activity already');
};

export const deleteActivities = async (activityId) => {
  // code down below
  const response = await axios.delete(`${SERVER}/activities/${activityId}`);
  // alert(response.data);
  alert('Delete activity already');
};

export const getActivityById = (activityId) => axios.get(`/activity/${activityId}`);

export const editActivities = (activityId, body) => {
  axios.patch(`/activity/${activityId}`, body);
  alert('Updated activity already');
};