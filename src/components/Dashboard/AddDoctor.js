import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = [e.target.value];
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("phone", info.phone);

    fetch("https://boiling-tor-06083.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          alert("Inserted Successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className=" container-fluid row"
      style={{ height: "100vh", backgroundColor: "#F4FDFB" }}
    >
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <h5 className="text-center">Add Doctor</h5>
        <div className="d-flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-5 px-5 "
            style={{ width: "500px" }}
          >
            <div className="mb-3">
              <label for="name" class="form-label">
                Name*
              </label>
              <input
                {...register("name", { required: true })}
                className="form-control"
                name="name"
                id="name"
                onBlur={handleBlur}
              />
              {errors.name?.type === "required" && (
                <span className="text-danger d-block ">
                  <small>Name is required</small>
                </span>
              )}
            </div>
            <div className="mb-3">
              <label for="email" class="form-label">
                Email*
              </label>
              <input
                {...register("email", { required: true })}
                className="form-control"
                name="email"
                id="email"
                onBlur={handleBlur}
              />
              {errors.email?.type === "required" && (
                <span className="text-danger d-block ">
                  <small>Email is required</small>
                </span>
              )}
            </div>
            <div className="mb-3">
              <label for="email" class="form-label">
                Phone*
              </label>
              <input
                {...register("phone", { required: true })}
                className="form-control"
                name="phone"
                id="phone"
                onBlur={handleBlur}
              />
              {errors.phone?.type === "required" && (
                <span className="text-danger d-block ">
                  <small>Phone number is required</small>
                </span>
              )}
            </div>
            <div className="mb-3">
              <label for="type" class="form-label">
                Speciality*
              </label>
              <select
                class="form-control"
                {...register("type", { required: true })}
                className="form-control"
                name="type"
                id="type"
                onBlur={handleBlur}
              >
                <option selected>Select Speciality</option>
                <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Cavity Protection">Cavity Protection</option>
              </select>
              {errors.type?.type === "required" && (
                <span className="text-danger d-block ">
                  <small>Speciality is required</small>
                </span>
              )}
            </div>
            <div className="mb-3">
              <label for="image" class="form-label">
                Upload Image*
              </label>
              <input
                {...register("image", { required: true })}
                className="form-control"
                name="image"
                id="image"
                type="file"
                onChange={handleFileChange}
              />
              {errors.image?.type === "required" && (
                <span className="text-danger d-block ">
                  <small>Image is required</small>
                </span>
              )}
            </div>
            <button type="submit" class="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
