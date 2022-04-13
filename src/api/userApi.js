import axiosClient from "./axiosClient";

const base_url = "/users";

const api = {
  getAll(params) {
      const url = `${base_url}/`;
      return axiosClient.get(url, {params})
  },
  get(id) {
      const url = `${base_url}/${id}`
      return axiosClient.get(url)
  },
  add(data) {
      const url = `${base_url}`;
      return axiosClient.post(url, data)
  },
  update(id, data) {
      const url = `${base_url}/${id}`
      return axiosClient.patch(url, data)
  },
  remove(id) {
      const url = `${base_url}/${id}`;
      return axiosClient.delete(url)
  },
};
export default api;
