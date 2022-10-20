import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../../utl/httpClient.js";

export const useProvideAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate()
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
          navigate("/job-listing")
          window.location.reload(false)
      
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
      const data = localStorage.getItem("userInfo")

      setAuthUser(JSON.parse(data))
     }else{
      navigate("/")
     }
 
  },[])
  const logout = (callbackFun) => {
    fetchSuccess();
    httpClient.defaults.headers.common['authorization'] = '';
    localStorage.clear();
    navigate("/")
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
