import config from "./config";;
import axios from "axios";

const instance = axios.create({
  baseURL: config.URL
})

class ArticleService {
  static GetAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await instance.get(config.endpoints.article);
        const data = res.data;
        resolve(data)
      }catch(err) {
        reject(err);
      }
    });
  }

  static GetSingle(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await instance.get(`${config.endpoints.article}${id}`);
        const data = res.data;
        resolve(data)
      }catch(err) {
        reject(err);
      }
    });
  }
}



export default {
  async GetAll() {
    const res = await instance.get(config.endpoints.article);
    const data = res.data;
    return data;
  }
}