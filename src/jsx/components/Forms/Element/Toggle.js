import React from "react";
import Nouislider from "nouislider-react";

class Toggle extends React.Component {
   render() {
      return (
         <Nouislider
            orientation="horizontal"
            start={0}
            range={{
               min: [0, 1],
               max: 1,
            }}
         />
      );
   }
}

export default Toggle;
