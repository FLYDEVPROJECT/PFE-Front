import React from "react";
import BookData from './Data.json';
import EventGastro from "./EventGastro"

const Gastro = () => {
   return (
      <div className="h-80">

         <EventGastro placeholder="le Nom du professionell de santé " data={BookData} />
      </div>
   );
};

export default Gastro;
