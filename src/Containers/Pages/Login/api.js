import React, {  useState } from "react";
import { httpClient } from "../../../utl/httpClient.js";

export const useProvideAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState("");
  //const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  const fetchStart = () => {
    setLoading(true);
    setError("");
  };

  const fetchSuccess = () => {
    setLoading(false);
    setError("");
  };

  const fetchError = (error) => {
    setLoading(false);
    setError(error);
  };

  const userLogin = (user, callbackFun) => {
    fetchStart();
    httpClient
      .post("auth/login", user)
      .then(({ data }) => {
        console.log(user, data, "user", "data");
        if (data.data) {
          fetchSuccess();
          httpClient.defaults.headers.common["authorization"] = data.data.token;
          localStorage.setItem(
            "token",
            data.data.token,
            httpClient.defaults.headers.common["authorization"]
          );
          setAuthUser(data?.data)
          
          localStorage.setItem(
            "userInfo",
            JSON.stringify(data.data)
          );
          window.location.reload(false)
          //history.push('/dashboard');
          //getAuthUser();
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error);
        httpClient.defaults.headers.common["authorization"] = "";
      });
  };
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      httpClient.defaults.headers.common['authorization'] = token;
      const data = JSON.parse( localStorage.getItem("userInfo") || {})
      setAuthUser(data)
     }
 
  },[])
  const logout = (callbackFun) => {
    fetchSuccess();
    httpClient.defaults.headers.common['authorization'] = '';
    localStorage.clear();
    setAuthUser(false);
    if (callbackFun) callbackFun();
   
  }
  return {
    setError,
    authUser,
    setAuthUser,
    userLogin,
    error,
    isLoading,
    logout
  };
};
