import React from "react";
import BookData from './Data.json';
import EventOrthopedie from "./EventOrthopedie";


const Orthopedie = () => {
   return (
      <div className="h-80">

         <EventOrthopedie placeholder="le Nom du professionell de santé " data={BookData} />      
      </div>
   );
};

export default Orthopedie ;
