import React, { useState } from 'react';
import api from 'api';
import { useLocalStorage } from 'hooks';
import { setInterceptors, setAuthHeader } from 'utils/axios';

const LoginContext = React.createContext({ })
export { LoginContext };

const LoginContextContainer = (props) => {
  const [accessToken, setAccessToken] = useLocalStorage('access-token', undefined, token => setAuthHeader(`JWT ${token}`));
  const [user, setUser] = useLocalStorage('user', undefined);
  const [errors, setErrors] = useState(undefined);

  const loginUser = async (email, password) => {
    try{ 
      const result = await api.loginUser({ email, password });
      if(result.data.access_token) {
        setAccessToken(result.data.access_token);
        setErrors(undefined);
        await fetchCurrentUser();
      } else {
        setErrors("There was a problem with login");
      }
    } catch (e) {
      setErrors("There was a problem with login");
    }
  }

  const fetchCurrentUser = async () => {
    try {
      const response = await api.currentUser();
      setUser(response.data)
    } catch (e) {
      setErrors("There was a problem with login");
    }
  }

  const logoutUser = () => {
    setUser(undefined);
    setAccessToken(undefined);
  }

  const clearErrors = () => {
    setErrors(undefined);
  }

  setInterceptors(logoutUser);

  return (
    <LoginContext.Provider
      value={{
        user: user,
        errors: errors,
        clearErrors: clearErrors,
        login: loginUser,
        logout: logoutUser
      }}
    >
      { props.children }
    </LoginContext.Provider>
  )
}

export default LoginContextContainer;
