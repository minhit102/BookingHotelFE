import { useContext } from "react";
import { UserContext } from "./../../UserContext";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Account.css";
export default function AccountPage() {
  const { subPage } = useParams();
  const { user, setUser, setToken, ready, setReady } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("User Account : " + user);

  if (!ready && !user) {
    return "LOADING....";
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  function classNameFunction(Item) {
    let nameClass = "accountItems";
    if (Item === subPage) {
      nameClass = "accountItemsNow";
    }
    return nameClass;
  }
  function logout() {
    let token = localStorage.getItem("tokenUser");
    if (token) {
      axios
        .post(
          "auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          localStorage.clear();
          setUser(null); // Lưu user vào state sau khi lấy thông tin từ API
          setReady(false);
          setToken(null);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.error("No token found in localStorage");
    }
  }
  return (
    <div>
      <div className="divAccountPage">
        <nav className="navAccountPage">
          <Link
            className={classNameFunction("profile")}
            to={"/account/profile"}
          >
            My Profile
          </Link>
          <Link
            className={classNameFunction("booking")}
            to={"/account/booking"}
          >
            My Booking
          </Link>
          <Link
            className={classNameFunction("accommodate")}
            to={"/account/accommodate"}
          >
            My Accommodate
          </Link>
        </nav>
      </div>
      {subPage === "profile" && (
        <div className="containerProfile">
          <div>WEBCOME TO PROFILE ----{user.username}</div>
          <div>
            <button onClick={logout} className="buttonLogOut">
              LOG OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
