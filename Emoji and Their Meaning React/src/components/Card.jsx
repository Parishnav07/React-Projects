import React from "react";
import Details from "./Details";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="name">{props.name}</p>
        <Avatar imgLink={props.imgLink} />
        {/* <img className="circle-img" src={props.imgLink} alt="" /> */}
      </div>
      <div className="bottom">
        {/* <p className="info">{props.description}</p> */}
        <Details description={props.description} />
      </div>
    </div>
  );
}

export default Card;
