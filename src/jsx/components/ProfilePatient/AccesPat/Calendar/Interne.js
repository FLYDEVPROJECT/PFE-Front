import React from "react";
import BookData from './Data.json';
import EventInterne from "./EventInterne";


const interne = () => {
   return (
      <div className="h-80">

         <EventInterne placeholder="le Nom du professionell de santé " data={BookData} />  
      </div>
   );
};

export default interne ;
