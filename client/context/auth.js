import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { SERVER_API_URL } from "../config";

export default AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  // config axios
  axios.defaults.baseURL = SERVER_API_URL;

  useEffect(() => {
    const loadFromAsyncStorage = async () => {
      let data = await AsyncStorage.getItem("@auth");
      const as = JSON.parse(data);
      setState({ ...state, user: as.user, token: as.token });
    };
    loadFromAsyncStorage();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
