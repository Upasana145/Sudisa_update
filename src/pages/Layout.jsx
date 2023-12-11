import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Moulding from "./Moulding";
import Visual from "./Visual";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { projectTypeHandler } from "../redux/slices/projectSlice";
import Otppage from "./Otppage";
import Safty from "./Safty";

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [isloggedIn, setIsloggedin] = useState(false);

  const auth = useSelector((state) => state.auth.value);

  const projectType = useSelector((state) => state.projectType.value);

  const dispatch = useDispatch();

  console.log(projectType);

  const handleOptionSelect = (selectedOption) => {
    console.log(selectedOption, "uuuuuuuuuuuuuuuuuuuuuuuu");

    // setSelectedOption(selectedOption); // Update the selected option in state
    dispatch(projectTypeHandler(selectedOption));
  };

  // console.log(selectedOption);

  return (
    <>
      <BrowserRouter>
        {!auth ? (
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/forget" element={<Otppage />} />
          </Routes>
        ) : (
          <>
            <Header handleOptionSelect={handleOptionSelect} />
            <Sidebar />
            {projectType && projectType === "Safty" && <Safty />}
            {projectType && projectType === "Moulding" && <Moulding />}
            {projectType && projectType === "Visual Inspection" && <Visual />}
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default Layout;
