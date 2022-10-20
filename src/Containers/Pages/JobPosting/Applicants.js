import React from "react";
import { Button, Modal } from "react-bootstrap"
import { useJobs } from "./api"

export const Applicants = (props) => {
  console.log(props, "props")
  const {getApplicants, applicantsInfo} = useJobs();
  React.useEffect(() => {
     getApplicants()
  },[])
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Applicants for this job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props?.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}