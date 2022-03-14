import React from "react";
import BookData from './Data.json';
import EventCalendar from "./EventCalendar";
 

function Calendar  () {
   return (
      <div className="h-80">
         <EventCalendar placeholder="le Nom du professionell de santé " data={BookData} />
      </div>
   );
};

export default Calendar;
