import React, { useState } from "react";
import ModalForm from "./ModalForm";

const BookingCard = ({ data, date }) => {
  const { subject, visitingHour, totalSpace } = data;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3 border-0 shadow rounded">
        <div className="card-body text-center">
          <h5 className="card-title text-brand app-color">{subject}</h5>
          <h6 className="fw-700">{visitingHour}</h6>
          <small className="text-secondary ">
            {totalSpace} SPACES AVAILABLE
          </small>
          <button
            onClick={openModal}
            className="submit-btn text-uppercase mt-3"
          >
            Book Appointment
          </button>
        </div>
        <ModalForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          date={date}
          data={data}
        ></ModalForm>
      </div>
    </div>
  );
};

export default BookingCard;
