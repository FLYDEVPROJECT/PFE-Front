import BookData from './Data.json';
import React from "react";
import EventGynecologie from "./EventGynecologie"


const gynecologie = () => {
   return (
      <div className="h-80">

         <EventGynecologie placeholder="le Nom du professionell de santé " data={BookData} />  
      </div>
   );
};

export default gynecologie;
