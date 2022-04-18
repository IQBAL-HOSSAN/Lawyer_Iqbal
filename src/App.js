import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Component/Pages/Blog/Blog";
import Checkout from "./Component/Pages/Checkout/Checkout";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
// import Services from "./Component/Pages/Services/Services";
import SignUp from "./Component/Pages/SignUp/SignUp";
import Footer from "./Component/Share/Footer/Footer";
import Header from "./Component/Share/Header/Header";
import NotFound from "./Component/NotFound/NotFound";
import RequireAuth from "./Auth/RequireAuth";
import About from "./Component/Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/services" element={<Services></Services>}></Route> */}
        <Route
          path="/checkout"
          element={
            <Checkout></Checkout>

            // <RequireAuth>
            //   <Checkout></Checkout>
            // </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
