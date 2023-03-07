import React from "react";
import classes from "./Places.module.css";
import poker from "../assets/images/poker.png";
import { BsCalendarEventFill, BsCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { RiHeartsFill } from "react-icons/ri";
import { useData } from "../context/DataContext";
const Places = () => {
  const { places } = useData();

  const Place = ({ place }) => (
    <div className={classes.placesList + " mb-4"}>
      <div className="d-flex">
        <div className={classes.placeListImage}>
          <img src={place.image} alt="" />
        </div>
        <div className={classes.placeDetails}>
          <h4>{place.title}</h4>
          <div>
            <div>
              <RiHeartsFill /> {place.ratings}
            </div>
            <div>
              <GoLocation /> {place.location}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-primary me-2">View</button>
        <button className="btn btn-outline-warning me-2">Update</button>
        <button className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  );

  return (
    <div className={classes.main}>
      <div className={"p-3 container "}>
        <h4 className={classes.mainText + " mb-3"}>
          <strong>Places</strong>
        </h4>
        <h5>Search</h5>
        <nav className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div className={"input-group " + classes.inp}>
            <span className="input-group-text">ID</span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Id"
            />
          </div>
          <div className={"input-group " + classes.inp}>
            <span className="input-group-text">
              <BsCalendarEventFill size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Title"
            />
          </div>
          <div className={"input-group " + classes.inp}>
            <span className="input-group-text">
              <RiHeartsFill size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Ratings"
            />
          </div>
          <div className={"input-group " + classes.inp}>
            <span className="input-group-text">
              <IoLocationSharp size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Location"
            />
          </div>
          <div>
            <button className={"btn " + classes.btnCustom}>Clear</button>
          </div>
        </nav>
        <h5 className="my-3">Active Places</h5>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className={"container"}>
            <div className="">
              {places.map((elem) => {
                return <Place place={elem} />;
              })}
            </div>
          </div>
        </div>

        <nav
          className={
            "mt-4 d-flex align-items-center justify-content-center " +
            classes.page
          }
          aria-label="users navigation "
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Places;
