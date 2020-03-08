import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.post['Content-Type'] = 'application/json'

const setAuthHeader = (token) => {
  instance.defaults.headers.common['Authorization'] = token;
}

const setInterceptors = (logoutUser) => {
  instance.interceptors.response.use(response => {
    return { success: true, status: response.status, data: (response || {}).data }
  }, error => {
    /** @error.response.data
     * description: "Invalid credentials"
     * error: "Bad Request"
     * status_code: 401
     */
    const resp = error.response || error;
    const data = resp.data || resp;
    console.warn('error:', data);
    if (resp.status === 401) logoutUser();
    return Promise.reject({ success: false, status: resp.status, data });
  });
}

export { setAuthHeader, setInterceptors };
export default instance;
