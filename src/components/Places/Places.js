import React from "react";
import { useData } from "../../context/DataContext";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import classes from "./Places.module.css";
const Tickets = ({}) => {
  const { places } = useData();
  return (
    <div>
      <h5 className="text-center pt-2">Popular Places</h5>
      <div className={" " + classes.activePlaces}>
        <ul className={classes.ticketHolder}>
          {places.map((place) => (
            <li className={classes.ticket}>
              <div className={classes.ticketImage}>
                <img src={place.image} alt="" />
              </div>
              <div className={classes.ticketDetails}>
                <div>
                  <h5>{place.title}</h5>
                  <div className="d-flex align-items-center">
                    <AiFillStar />
                    <small>({place.ratings})</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <GoLocation />
                    <small>{place.location}</small>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline-light">View</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
