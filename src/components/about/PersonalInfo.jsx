import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Reody" },
  { meta: "last name", metaInfo: "Rustam" },
  { meta: "Age", metaInfo: "40 Years" },
  { meta: "Nationality", metaInfo: "Indonesia" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+6281241003047" },
  { meta: "Email", metaInfo: "roedyrustam.id@gmail.com" },
  { meta: "Skype", metaInfo: " roedy" },
  { meta: "langages", metaInfo: "Indonesia, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
