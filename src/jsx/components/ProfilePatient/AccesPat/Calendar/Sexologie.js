import React from "react";
import BookData from './Data.json';
import EventSexologie from "./EventSexologie";


const Sexologie = () => {
   return (
      <div className="h-80">

         <EventSexologie placeholder="le Nom du professionell de santé " data={BookData} />      
      </div>
   );
};

export default Sexologie ;
