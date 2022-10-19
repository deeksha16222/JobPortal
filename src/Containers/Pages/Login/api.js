import {  useState } from "react";
import { httpClient } from "../../../utl/HttpClient";

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
          //history.push('/dashboard');
          //getAuthUser();
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
        httpClient.defaults.headers.common["authorization"] = "";
      });
  };
  return {
    setError,
    authUser,
    setAuthUser,
    userLogin,
  };
};
