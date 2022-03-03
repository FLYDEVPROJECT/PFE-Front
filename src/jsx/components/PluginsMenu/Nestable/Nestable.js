import React, { Component } from "react";



class Nestable extends Component {
   render() {
      return (
         <div className="h-80">

            <div className="row">
               <div className="col-12">
                  <div className="card">
                     <div className="card-header">
                        <h4 className="card-title">Nestable</h4>
                        <h4 className="card-title"><input type="text"></input></h4>

                     </div>
                     <div className="card-body">
                        <div className="row">
                          
                          
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Nestable;
