import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api.js";

const Context = createContext();
const storeData = async (key, value) => {
  const jsonValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    return e;
    // saving error
  }
};
function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (user) {
      storeData("auth", user);
    }
  }, [user]);

  function handleLogin(email, password) {
    return api
      .post("/auth", {
        email: email,
        password: password,
      })
      .then((result) => {
        setUser(result.data);
        return result.data;
      })
      .catch((err) => {
        return {
          error: err.response.data
            ? err.response.data.message
            : "Intertal Error",
        };
      });
  }
  function handleRegister(fromData) {
    return api
      .post("/users", fromData)
      .then((result) => {
        setUser(result.data);
        return result.data;
      })
      .catch((err) => {
        return {
          error: err.response.data
            ? err.response.data.message
            : "Intertal Error",
        };
      });
  }
  async function handleLogout() {
    setUser(false);
  }

  return (
    <Context.Provider
      value={{ user, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
