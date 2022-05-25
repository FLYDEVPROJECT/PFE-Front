import React, { Fragment } from "react";
import { Link } from "react-router-dom";



const Compose = () => {
   return (
      <Fragment>

<div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src="https://www.expertmemoire.com/wp-content/uploads/2020/10/sujet-de-memoire.jpg" class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
      </Fragment>
   );
};

export default Compose;