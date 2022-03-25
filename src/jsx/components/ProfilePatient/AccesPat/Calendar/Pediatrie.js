import React from "react";
import BookData from './Data.json';
import EventPediatrie from "./EventPediatrie";


const Pediatrie = () => {
   return (
      <div className="h-80">

         <EventPediatrie  placeholder="le Nom du professionell de santé " data={BookData} />   
      </div>
   );
};

export default Pediatrie ;
