import axios, { setAuthHeader } from 'utils/axios.js';

const api = {
  loginUser: async (user_data) => {
    const result = await axios.post(`/auth`, {
      email: user_data.email,
      password: user_data.password
    })
    if (result.data && result.data.access_token !== undefined) {
      setAuthHeader(`JWT ${result.data.access_token}`)
    }
    return result;
  },
  currentUser: async() => {
    return await axios(`/users/current`);
  },
}

export default api;
