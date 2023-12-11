import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Calibration from "./Calibration";
import Prac from "./Prac";
import Header from "../components/Header";
import Sidebar from "../components/Mainsidebar";
import AddDept from "./AddDept";
import Depts from "./Depts";
import EditDept from "./Editdept";
import ImageContainernorecordfound from "./ImageContainernorecordfound";
import Adduser from "./Adduser";
import User from "./User";

function Safty() {
  return (
    <>
      <Sidebar />
      {/* <Header /> */}
      {/* <Mainpage /> */}
      <div className="master">
        <Routes>
          {/* <Route path="/" element={<About />}></Route> */}

          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/department" element={<Deptartment />}></Route> */}
          <Route path="/calibration" element={<Calibration />}></Route>
          <Route path="/prac" element={<Prac />}></Route>
          <Route path="/Header" element={<Header />}></Route>
          <Route path="/addDept" element={<AddDept />} />
          <Route path="/editDept" element={<EditDept />} />
          <Route path="/department" element={<Depts />} />
          <Route path="/addUser" element={<Adduser />} />
          <Route path="/user" element={<User />} />
          <Route
            path="/norecordfound"
            element={<ImageContainernorecordfound />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Safty;
