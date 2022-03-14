import React from "react";
import BookData from './Data.json';
import EventCardiologie from "./EventCardiologie";
 

function Cardiologie  () {
   return (
      <div className="h-80">
         <EventCardiologie placeholder="le Nom du professionell de santé " data={BookData} />
      </div>
   );
};

export default Cardiologie;
