import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../redux/slices/User";
import "./Profile.scss";
import axios from "axios";


function Profile() {
  const { userProfile } = useSelector((state) => state.UserReducer);

  const [stateBtn, setStateBtn] = useState(true);

  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    gender: true,
  });

  useEffect(() => {
    setValues({
      ...values,
      userName: userProfile.name,
      email: userProfile.email,
      password: "",
      phone: userProfile.phone,
      gender: userProfile.gender,
    });
  }, [userProfile]);


  // call api to get profile data
  const dispatch = useDispatch();

  useEffect(() => {
    const actionThunk = getProfileThunk();
    dispatch(actionThunk);
  }, []);


  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-left">
          <div className="profile-avatar">
            <img
              src={userProfile.avatar}
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
              }}
            />
            <i className="fa-solid fa-plus"></i>
            <span>{values.userName}</span>
          </div>
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => toggleTab(tab)}
                className={type === tab ? "active-tab" : "tab"}
              >
                <i className="fa-solid fa-gear"></i>
                <span>{tab}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-right">
          <h1>Profile</h1>
          <h3>{type}</h3>
          <div className="profile-content">
            <div
              className={ " profile-account"}
            >
              <div className="account-div">
                <label>User Name:</label>
                <input
                  type="text"
                  name="userName"
                  onChange={handleChangeValue}
                  value={values.userName}
                  disabled={stateBtn}
                />
              </div>
              <div className="account-div">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChangeValue}
                  value={values.email}
                  disabled={stateBtn}
                />
              </div>
              <div className="account-div">
                <label>Password:</label>
                <input
                  type="text"
                  name="password"
                  onChange={handleChangeValue}
                  value={values.password}
                  disabled={stateBtn}
                />
              </div>
              <div className="account-div">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChangeValue}
                  value={values.phone}
                  disabled={stateBtn}
                />
              </div>
              <div className="account-bottom">
                <div className="account-gender">
                  <span>Gender:</span>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={false}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value={true}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="account-button">
                  {stateBtn ? (
                    <button
                      id="edit"
                      className="account-btn"
                      onClick={handleChangeBtn}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      id="update"
                      className="account-btn"
                      onClick={handleChangeBtn}
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div
              className={
                "content-child profile-password"
              }
            >
              <div className="password-input">
                <label>New Password:</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                />
              </div>
              <div className="password-input">
                <label>Confirm new Password:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>
              <div className="password-button">
                <button>Edit</button>
              </div>
            </div>
            <div
              className={
                "profile-account"
              }
            >
              <h1>Content alo alo</h1>
            </div>
            <div
              className={
                "profile-account"
              }
            >
              <h1>Content alo alo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
