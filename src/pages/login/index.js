import React, {useState} from 'react';
import { LoginContext } from 'contexts/LoginContextContainer.js';

const Login = (props) => {
  const [values, setValue] = useState({email: '', password: ''});

  const handleInputChange = e => {
    const {name, value} = e.target
    setValue({...values, [name]: value})
  }
  const handleLogin = loginCtx => async () => {
    console.log("what is login ctx?")
    console.log(loginCtx)
    await loginCtx.login(values.email, values.password);
  }

  return (
    <LoginContext.Consumer>
      {loginContext => (
        <div>
          <label>Email:</label>
           <input
             type="text"
             name="email"
             placeholder="email"
             onChange={handleInputChange}
             value={values.email}
           />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={values.password}
          />
          <input
            type="submit"
            value="Login"
            onClick={handleLogin(loginContext)}
          />
          { loginContext.errors && (
            <div> { loginContext.errors } </div>
          )}
        </div>
      )}
    </LoginContext.Consumer>
  )
}

export default Login
