import axiosClient from"./axiosClient"
const PhotoApi = {
  getAll: (params) => {
    const url = `?_limit=10&_page=${params}`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/${id}`;
    return axiosClient.get(url);
  },
  search: (page,title) => {
    const url = `?_limit=10&_page=${page}&title_like=${title}`;
    return axiosClient.get(url);
  },
  post: (params) => {
    const url = `/`;
    return axiosClient.post(url,  params );
  },
  edit: (params) => {
    const url = `/${params.id}`;
    return axiosClient.put(url,  params );
  },
  remove: (id) => {
    const url = `/${id}`;
    return axiosClient.delete(url );
  },
};
export default PhotoApi
