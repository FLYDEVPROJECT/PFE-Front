import React, { useState } from "react";
import Categories from './Categories'
import "./EventCalender.css";

const Category=  () =>  {
    const [data,setData]=useState(Categories)
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=> {
            return curData.category===catItem ;

        }
        ) ;
        setData(result)


    }
   return (
      <div className="h-80">
         <div className="container-fluid mx-2">
             <div className="row mt-5 mx-2">
                 <div className="col-md-3">
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Sfax')}>sfax </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Sousse')}>Sousse  </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Tunis')}>Tunis </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Bizerte')}>bizerte </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Nabeul')}>nabeul</button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Gabes')}>Gabes </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Kairouan')}>kairouan </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Monastir')}>Monastir</button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Mahdia')}>mahdia</button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Sidi Bouzid')}>Sidi Bouzid  </button>
                     <button className="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Tataouine')}>Tataouina</button>
                     <button className="btn btn-warning w-100" onClick={()=>setData(Categories)}>all </button>
                 </div>
                 <div className="col-md-9">
                     <div className="row">
                         {data.map((values) => {
                             const {id,title, price,image}=values ;
                             return (
                                 <>
                                  <div className="col-md-4 mb-4" key ={id}>
                         <div className="card">
                         <img src={image} className="card-img-top" alt="..."/>

                                                <div className="card-body">
                                 <h5 className="card-title">{title} </h5>
                                 <p>{price}</p> 
                                 <p className="card-text"></p>
                                 <button className="btn btn-dark">Click Now</button>
                             </div>

                         </div>
                         </div>
                                 </>
                             )
                         }
                         )}


                    
                       
                         

                     </div>
                 </div>
    
    
    </div>                      </div>
      </div>
   );
};

export default Category;
