import React from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import CvPhoto from "../CvPhoto.jpeg";
import "./UserCV.css";

const UserCV = () => {
  return (
    <div className="all">
      <img src={CvPhoto} alt="" />
      <div className="flex">
        <PersonalInfo />
      </div>
      <Experience />
      <Contacts />
    </div>
  );
};

export default UserCV;
