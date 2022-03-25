import React from "react";
import BookData from './Data.json';
import EventOtoRhinoLaryngologie from "./EventOtoRhinoLaryngologie";


const OtoRhinoLaryngologie = () => {
   return (
      <div className="h-80">
         <EventOtoRhinoLaryngologie  placeholder="le Nom du professionell de santé " data={BookData} />   
      </div>
   );
};

export default OtoRhinoLaryngologie ;
