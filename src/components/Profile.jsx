import React from "react";
import '../assets/sass/Profile.scss';
import profile from '../assets/img/profilee.png';
// import BgProfile from '../assets/img/background2.png';

const Profile = () => {
  return (
    <div className="container-profile">
      {/* <div className="profile">
      <img className="profile-bg"
      
      alt="fotografía de yulissa  terán" src={BgProfile}
      /> */}
      <img alt="fotografía de yulissa  terán" className="img-profile" src={profile} />
   
      {/* </div> */}
 </div>
  );
};

export default Profile;
