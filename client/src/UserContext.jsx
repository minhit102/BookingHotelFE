import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      let tokenbearn = localStorage.getItem("tokenUser");
      console.log("userContext : " + tokenbearn);
      if (tokenbearn) {
        axios
          .get("user/profile", {
            headers: {
              Authorization: `Bearer ${tokenbearn}`,
            },
          })
          .then((response) => {
            console.log(response.data.user);
            setUser(response.data.user); // Lưu user vào state sau khi lấy thông tin từ API
            setReady(true);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        console.error("No token found in localStorage");
      }
    }
  }, [user]);
  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, ready, setReady }}
    >
      {children}
    </UserContext.Provider>
  );
}
