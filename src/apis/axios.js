import axios from "axios";

export const axiosRequestInstance = (requestObj) =>
  axios
    .create({
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      baseURL: "http://localhost:3000",
    })
    .request(requestObj);


