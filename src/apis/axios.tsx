import axios from "axios";

export const axiosRequestInstance = Object(requestObj) =>
  axios
    .create({
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      baseURL: "http://localhost:3000",
    })
    .request(Object(requestObj));

export const configAxios = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000'
    })
    axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    return axiosInstance;
};
