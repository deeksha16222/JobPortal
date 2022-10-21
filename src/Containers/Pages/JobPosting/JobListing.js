
import React, {  useState } from "react";
import { useJobs } from "./api.js";
import Pagination from "./Pagination.js";
import geo from "../../../assets/images/icons/geo.svg";
import writing from "../../../assets/images/icons/writing.svg";
import { Applicants } from "./Applicants.js";


export default function JobListing() {
  const { getJobs, jobList, isLoading, error, getApplicants, applicantsInfo } = useJobs();
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    getJobs(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const openModal = (id) => {
    setModalShow(true);
    if ( id !== undefined) {
      getApplicants(id);
    }
  }

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="bg-dark background__wrap"></div>
      <div className="job-wrap">
        <div className="container">
          <div className={jobList?.data?.length > 0 ? "job__listing" : ""}>
            <h1 className="job-title">Jobs posted by you</h1>

            {jobList?.data?.length > 0 ? (
              <div className="dataContainer">
                {jobList?.data?.map((i) => (
                  <>
                    <div className="post mb-5">
                      <h1 className="card-title">{i.title}</h1>
                      <p className="card-description">{i.description}</p>
                      <div className="d-flex gap-3 align-items-center flex-wrap justify-content-between">
                        <p className="card-location">
                          <img src={geo} alt="geo" /> {i.location}
                        </p>
                        <button
                          className="primary-btn card-button"
                          onClick={() => {
                            openModal(i.id)                          
                          }}
                        >
                          {" "}
                          View Applications{" "}
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center mt-5 mb-5 job-default flex-column align-items-center">
                <img src={writing} alt="writing" />
                <br />
                <p className="card-description">
                  Your posted jobs will show here!
                </p>
                <br />
                <button className="primary-btn">Post a job</button>
              </div>
            )}
          </div>
          {jobList?.data?.length > 0 ? (
            <Pagination
              data={jobList.data}
              pageLimit={parseInt(
                jobList?.metadata?.count / jobList?.metadata?.limit
              )}
              dataLimit={jobList?.metadata?.limit}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ) : (
            ""
          )}
        </div>
        <Applicants
          show={modalShow}
          onHide={() => setModalShow(false)}
          applicantsInfo={applicantsInfo}
        />
      </div>
    </>
  );
}
