import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Test/Home";
import Blogs from "./components/Test/Blogs";
import Contrac from "./components/Test/Contrac";
import NoPage from "./components/Test/NoPage";
import IndexHome from "./page/IndexHome";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Profile from "./page/Profile/profile";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://localhost:8800/api";
axios.defaults.withCredentials = true;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPage from "./page/Account/account";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<IndexHome />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account/:subPage" element={<AccountPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
