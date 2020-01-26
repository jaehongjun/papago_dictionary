import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://openapi.naver.com/v1/papago/n2mt",
  headers: {
    "Content-Type": "application/json",
    "X-Naver-Client-Id": "VjDlYkEBMzHqDn3O6emE",
    "X-Naver-Client-Secret": "lx91upfdsT"
  }
});

const instance = {
  post: (url, payload) =>
    axios
      .post(url, payload)
      .then(data => {
        console.log(data.data.message.result);
        return data.data.message.result;
      })
      .catch(err => console.log(err))
};

const api = {
  transfer: payload => {
    console.log(payload);
    return instance.post("", payload);
  }
};

export default api;
