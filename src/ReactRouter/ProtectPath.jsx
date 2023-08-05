import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectPath = (props) => {
  const nav = useNavigate();

  useEffect(() => {
    const userid = localStorage.getItem("loggedIn");
    if (!userid) {
      nav('/SignUp');
    }
  }, [nav]); // Add 'nav' to the dependency array

  return (
    <>
      <props.component />
    </>
  );
};

export default ProtectPath;
