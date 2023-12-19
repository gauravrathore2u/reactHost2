import axios from "axios";
// const baseURL = "http://localhost:8000/api";
const baseURL = import.meta.env.VITE_APP_SERVER_URL;

export const setStudents = async () => {
  try {
    const response = await axios.get(baseURL + "/students/setdata");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axios.get(baseURL + "/students");
    return response;
  } catch (error) {
    console.log(error);
  }
};
