import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const IndexHome = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default IndexHome;
