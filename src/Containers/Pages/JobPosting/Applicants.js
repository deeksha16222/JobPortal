import React from "react";
import { Modal } from "react-bootstrap";
import writing from "../../../assets/images/icons/writing.svg";

export const Applicants = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="applicants-modalHeader container">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="applicants-modal-title"
        >
          Applicants for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props?.applicantsInfo?.data?.length !== 0
            ? `Total ${props?.applicantsInfo?.data?.length} applicants`
            : "0 applicants"}
        </p>

        {props?.applicantsInfo?.data?.length === 0 ? (
          <div className="no-applicants">
            <div className="d-flex justify-content-center mt-5 mb-5 job-default flex-column align-items-center">
              <img src={writing} alt="writing" />
              <br />
              <p className="card-description">No applications available!</p>
            </div>
          </div>
        ) : (
          <div className="applicants__bg">
            {props?.applicantsInfo?.data?.map((ele) => (
              <div className="applicants-card">
                <div className="d-flex align-items-start gap-3">
                  <span className="user__name-header">
                    {ele?.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="name">{ele?.name}</p>
                    <p className="email">{ele?.email}</p>
                  </div>
                </div>
                <p className="skills mb-0">Skills</p>
                <p className="email mt-0">{ele?.skills}</p>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
