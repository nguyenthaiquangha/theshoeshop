import './Register.scss';
import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const nameRegex = /^[a-zA-ZÀ-ỹ\s']+$/;
const phoneRegex = /^[0-9]{10}$/;

const schemaRegister = Yup.object({
  email: Yup.string().email().required('Email is required'),
  userName: Yup.string()
    .matches(nameRegex, 'Invalid name')
    .required('Name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be at least 6 characters')
    .max(20, 'Must be 20 characters or less'),
  confirmPassword: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password')], 'Confirm Password Must be matched')
    .min(6, 'Must be at least 6 characters')
    .max(20, 'Must be 20 characters or less'),
  phone: Yup.string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});



function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      userName: '',
      phone: '',
      genderString: 'male',
      // gender: true,
    },


    validationSchema: schemaRegister,

    onSubmit: async (values) => {
      try {
        const resp = await axios.post(
          'https://shop.cyberlearn.vn/api/Users/signup',
          {
            email: values.email,
            password: values.password,
            userName: values.userName,
            phone: values.phone,
            gender: values.genderString === 'male' ? true : false,
          }
        );
        console.log('resp signup', resp);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='register-form'>
      <h1 className='register-title'>Register</h1>
      <hr />
      <div className="row">
        <div className="col-left ">
          <div className='regis-content'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              {...formik.getFieldProps('email')}
            />

            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div className='regis-content'>
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

          <div className='regis-content'>
            <label>Confirm Password</label>
            <input
              type='text'
              name='confirmPassword'
              {...formik.getFieldProps('confirmPassword')}
            />

            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <p>{formik.errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="col-right">
          <div className='regis-content'>
            <label>Name</label>
            <input
              type='text'
              name='userName'
              {...formik.getFieldProps('userName')}
            />
            {formik.errors.userName && formik.touched.userName && (
              <p>{formik.errors.userName}</p>
            )}
          </div>
          <div className='regis-content'>
            <label>Phone</label>
            <input
              type='text'
              name='phone'
              {...formik.getFieldProps('phone')}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p>{formik.errors.phone}</p>
            )}
          </div>
          <div className="gender-container">
            <label className="gender-label">Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="genderString"
                  value="male"
                  checked={formik.getFieldProps('genderString').value === "male"}
                  onChange={formik.getFieldProps('genderString').onChange}
                  onBlur={formik.getFieldProps('genderString').onBlur}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="genderString"
                  value="female"
                  checked={formik.getFieldProps('genderString').value === "female"}
                  onChange={formik.getFieldProps('genderString').onChange}
                  onBlur={formik.getFieldProps('genderString').onBlur}
                />

                Female
              </label>

            </div>

          </div>

          <button type='submit'>Submit</button>
        </div>
      </div>


    </form>
  );
}

export default Register;