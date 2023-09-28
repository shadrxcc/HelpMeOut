import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import VideoFile from "./pages/file";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/file" element={<VideoFile />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
