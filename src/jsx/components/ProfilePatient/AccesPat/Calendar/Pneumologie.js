import React from "react";
import BookData from './Data.json';
import EventPneumologie from "./EventPneumologie";


const Pneumologie = () => {
   return (
      <div className="h-80">

         <EventPneumologie placeholder="le Nom du professionell de santé " data={BookData} />      
      </div>
   );
};

export default Pneumologie ;
