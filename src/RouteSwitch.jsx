import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"

const RouteSwitch = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default RouteSwitch