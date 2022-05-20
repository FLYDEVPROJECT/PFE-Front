import React, {Fragment, useState } from "react";
import {Button} from "react-bootstrap";


import "./EventCalender.css";


function EventCalendar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

 

  return (
   <Fragment>
 

        <div class="card">
        <div className="row">
            <div className="col-lg-12">
                           <div class=" d-block card-header">

                           <div class="row">
  <div class="col-8">    <div class="card-title h5">ecrivez le Nom de votre médecin et votre ville </div>
                           <p class="mb-0 subtitle card-text">et recevez votre sms/mail de confirmation. C’est aussi simple que ça !</p>
                           </div></div></div></div></div>
<div class="container">
  <div class="row">
    <div class="col">  
   

    <select
                                                   className="form-control"
                                                   id="inputState"
                                                   defaultValue="option-2"
                                                 >
                                                   <option value="option-1">Ariana</option>
                                                   <option value="option-2">Beja </option>
                                                   <option value="option-3">Ben Arous</option>
                                                   <option value="option-4">Bizerte</option>
                                       <option value="option-5">Gabes</option>
                                       <option value="option-6">Gafsa</option>
                                       <option value="option-7">Jendouba</option>
                                       <option value="option-8">Kairouan</option>
                                       <option value="option-9">Kasserine</option>
                                       <option value="option-10">kebili</option>
                                       <option value="option-11">La Manouba</option>
                                       <option value="option-12">Kef</option>
                                       <option value="option-13">Mahdia</option>
                                       <option value="option-14">Médenine</option>
                                       <option value="option-15">Monastir</option>
                                       <option value="option-16">Nabeul</option>
                                       <option value="option-17">Sfax</option>
                                       <option value="option-18">Sidi Bouzid</option>
                                       <option value="option-19">Siliana</option>
                                       <option value="option-20">Sousse</option>
                                       <option value="option-21">Tataouine</option>
                                       <option value="option-22">Tozeur</option>
                                       <option value="option-23">Tunis</option>
                                       <option value="option-24">zaghouan</option>
                                                 </select> </div>




    <div class="col"> 
    <div className="col-lg-10 mb-6">
               <div class="input-group search-area ml-auto d-inline-flex">


               <input
          type="text"
          class="form-control"

          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
    
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}


               </div>
            </div></div>
            <div class="w-40"></div>


    <div class="col">  <div class="row justify-content-md-center">
    <Button className='mr-2' variant='primary'>
Recherche                </Button>
      </div>
</div>
    <div class="col"></div>
  </div>
</div>
        <div className="col-lg-6 mb-2">

     
    
    
   </div></div>
   <div class="card">
        <div className="row">
            <div className="col-lg-12">
                           <div class=" d-block card-header">

                           <div class="row">
  <div class="col-8">   
                         
                           </div></div></div></div></div>
<div class="container">
  <div class="row">
  


  
            <div class="w-40"></div>


    <div class="col">  <div class="row justify-content-md-center">
  
      </div>
</div>
    <div class="col"></div>
  </div>
</div>
     </div>       
    </Fragment>
  );
}

export default EventCalendar;
