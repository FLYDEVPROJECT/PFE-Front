import React from "react";
import BookData from './Data.json';
import EventOphtalmologie from "./EventOphtalmologie";


const Ophtalmologie = () => {
   return (
      <div className="h-80">

         <EventOphtalmologie placeholder="le Nom du professionell de santé " data={BookData} />      
      </div>
   );
};

export default Ophtalmologie ;
