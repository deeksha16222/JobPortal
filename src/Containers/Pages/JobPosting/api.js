import { useState } from "react";

import { httpClient } from "../../../utl/httpClient";

export const useJobs = () => {
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [applicantsInfo, setApplicantsInfo] = useState()
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

  const getJobs = (data) => {
    fetchStart();

    const token = localStorage.getItem("token");
    if (token) {
      httpClient.defaults.headers.common["authorization"] = token;
    }

    httpClient
      .get(`recruiters/jobs?page=${data}`)
      .then(({ data }) => {
        fetchSuccess();
        if (data.data.data) {
          setJobList(data.data);
        }
      })
      .catch(function (error) {
        localStorage.removeItem("token");
        httpClient.defaults.headers.common["authorization"] = "";
        fetchError(error.message);
      });
  };
  const getApplicants = (data) => {
    fetchStart();
    const token = localStorage.getItem("token");

    if (token) {
      httpClient.defaults.headers.common["authorization"] = token;
    }

    httpClient
      .get(`/recruiters/jobs/${data}/candidates`)
      .then(({ data }) => {
        fetchSuccess();
        if (data.data) {
         setApplicantsInfo(data);
        }else{

         setApplicantsInfo({
          data:[]
         });

        }
      })
      .catch(function (error) {
        localStorage.removeItem("token");
        httpClient.defaults.headers.common["authorization"] = "";
        fetchError(error.message);
      });
  };
  return {
    getJobs,
    jobList,
    error, isLoading,
    getApplicants, applicantsInfo
  };
};
