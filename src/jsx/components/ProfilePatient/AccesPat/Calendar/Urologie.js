import React from "react";
import BookData from './Data.json';
import EventUrologie from "./EventUrologie"

const Urologie = () => {
   return (
      <div className="h-80">

         <EventUrologie placeholder="le Nom du professionell de santé " data={BookData} />  
         
            
      </div>
   );
};

export default Urologie;
