import React,{useEffect,useState}  from "react";
import { Link } from "react-router-dom";

import "./Liste.js";


const Liste = (props) => {
  const listItems = props.data.map((cliente, key) =>
  <Link to={"/patient/details/"+cliente.id}>{cliente.user.nom}</Link>
  );
  return (
    <div class="card">
    <div className="row">
      <div className="col-lg-12">
        <div class=" d-block card-header">

          <div class="row">
            <div class="col-8">

              {listItems}



            </div></div></div></div></div>
  
  </div>
  );
};

export default Liste ;
