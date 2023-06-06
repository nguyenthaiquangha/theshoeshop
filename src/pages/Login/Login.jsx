import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { saveLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { useNavigate } from 'react-router-dom';

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email</label>
        <input type='text' name='email' {...formik.getFieldProps('email')} />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type='text'
          name='password'
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>

      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
