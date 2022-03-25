import React from "react";
import EventCardiologie from "./EventCardiologie";
import BookData from './Data.json';


 

function Cardiologie  () {
   return (
      <div className="h-80">
         <EventCardiologie placeholder="le Nom du professionell de santé " data={BookData} />      
      </div>
   );
};

export default Cardiologie;
