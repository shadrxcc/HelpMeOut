import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import VideoFile from "./pages/file";
import Landing from "./pages/landing";
import Home from "./pages/home";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/file" element={<VideoFile />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
