import React from 'react'; //(rface) shorthand for funtion template
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

/*
const FormSignIn = (submitForm) => {
  const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm,
    validate);

   return (
     <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>

              <div className="form-inputs">
                <label htmlFor="username"
                className="form-label">
                Username:
                </label>
                  <input id='username' 
                  type="text" 
                  name="username" 
                  className="form-input"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}/>
                  {errors.username && <p>{errors.username}</p>}
              </div>

              <div className="form-inputs">
                <label htmlFor="password"
                className="form-label">
                Password:
                </label>
                  <input id='password' 
                  type="password" 
                  name="password" 
                  className="form-input"
                  placeholder="Enter a password"
                  value={values.password}
                  onChange={handleChange}/>
                  {errors.password && <p>{errors.password}</p>}
              </div>
 
              <button className="form-input-btn" 
                id="submit" 
                name="submit"
                type="submit"> 
                  Sign in</button>
              
        </form> 
     </div>
   )
}
*/
// export default FormSignIn;
