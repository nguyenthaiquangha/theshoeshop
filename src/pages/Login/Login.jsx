import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { saveLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.scss'
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from 'src/assets/icon';

const schemaLogin = Yup.object({
  email: Yup.string().email().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be at least 6 characters')
    .max(20, 'Must be 20 characters or less'),
});

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: schemaLogin,

    onSubmit: async (values) => {
      try {
        console.log({ values });
        const resp = await axios.post(
          'https://shop.cyberlearn.vn/api/Users/signin',
          {
            password: values.password,
            email: values.email,
          }
        );
        console.log({ resp });
        saveLocalStorage(ACCESS_TOKEN, resp.data.content.accessToken);

        navigate('/profile');
      } catch (err) {
        console.log(err);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const passwordInputType = showPassword ? 'text' : 'password';
  return (
    <>
      <h1 className='login-title'>Register</h1>
      <form className='login-form' onSubmit={formik.handleSubmit}>
        <hr />

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div>
              <label>Email</label>
              <br />
              <input type='text' name='email' {...formik.getFieldProps('email')} />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div >
              <label>Password</label>
              <br />
              <div className="password-input-container">
                <input
                  type={passwordInputType}
                  name='password'
                  {...formik.getFieldProps('password')}
                />
                <span
                  className="password-toggle"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <NavLink to={'/register'}>
              Register now?
            </NavLink>
            <button className='btn-login' type='submit'>LOGIN</button>
          </div>
          <div className="col-3"></div>
        </div>



      </form>
    </>
  );
}

export default Login;
