import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PopUp from "./PopUp";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const ModalForm = ({ modalIsOpen, closeModal, date, data }) => {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (info) => {
    info.date = date.toDateString();
    info.service = data.subject;
    info.time = data.visitingHour;
    info.created = new Date();
    fetch("https://boiling-tor-06083.herokuapp.com/addAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Successful");
          closeModal();
          setBookingSuccess(true);
        } else {
          console.log("Data not inserted");
        }
      });
    setBookingInfo(info);
  };
  return (
    <div>
      {/* {bookingSuccess && <PopUp></PopUp>} */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeModal}
            className="close-icon"
          ></FontAwesomeIcon>
          <div className="my-3 " style={{ marginLeft: "120px" }}>
            <p className="text-center fw-500 secondary">{data.subject}</p>
            <h4> {date.toDateString()}</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          {/* <div className="form-group py-2">
            <input
              {...register("date", { required: true })}
              type="text"
              className="input-class"
              name="date"
              onFocus={(e) => (e.target.type = "date")}
              placeholder="Date"
            />
            {errors.date?.type === "required" && (
              <span className="errorMsg text-danger d-block ">
                <small>Date is required</small>
              </span>
            )}
          </div>
          <div className="form-group py-2">
            <input
              {...register("time", { required: true })}
              placeholder="Time"
              className="input-class"
              type="text"
              name="time"
              onFocus={(e) => (e.target.type = "time")}
            />
            {errors.time?.type === "required" && (
              <span className="errorMsg text-danger d-block ">
                <small>Time is required</small>
              </span>
            )}
          </div> */}
          <div className="form-group py-2">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input-class"
              name="name"
            />
            {errors.name?.type === "required" && (
              <span className="errorMsg text-danger d-block ">
                <small>Name is required</small>
              </span>
            )}
          </div>
          <div className="form-group py-2">
            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="input-class"
              name="phone"
            />
            {errors.phone?.type === "required" && (
              <span className="errorMsg text-danger d-block ">
                <small>Phone Number is required</small>
              </span>
            )}
          </div>
          <div className="form-group py-2">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input-class"
              name="email"
            />
            {errors.email?.type === "required" && (
              <span className="errorMsg text-danger d-block ">
                <small>Email is required</small>
              </span>
            )}
          </div>
          <div className="row mx-5">
            <div className="col-md-4">
              <div className="form-group py-2">
                <select
                  {...register("gender", { required: true })}
                  type="select"
                  className="input-class-2"
                  name="gender"
                >
                  <option disabled={true} value="Select Gender"></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not set">Other</option>
                </select>
                {errors.gender?.type === "required" && (
                  <span className=" text-danger d-block ">
                    <small>Gender is required</small>
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group py-2">
                <input
                  {...register("age", { required: true })}
                  type="text"
                  className="input-class-2"
                  name="age"
                  placeholder="Age"
                />
                {errors.age?.type === "required" && (
                  <span className=" text-danger d-block ">
                    <small>Age is required</small>
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group py-2">
                <input
                  {...register("weight", { required: true })}
                  type="text"
                  className="input-class-2"
                  name="weight"
                  placeholder="Weight"
                />
                {errors.weight?.type === "required" && (
                  <span className=" text-danger d-block ">
                    <small>Weight is required</small>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="form-group py-2 ">
            <input
              type="submit"
              value="Send"
              className="submit-btn mb-5 "
              style={{ marginLeft: "350px" }}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;
