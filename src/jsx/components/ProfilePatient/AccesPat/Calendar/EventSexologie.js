import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./EventCalender.css";
import Liste from "./Liste";


function EventCalendar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [ville, setVille] = useState("");
  const [liste, setListe] = useState(<></>);

  const changerville = (event) => {
    setVille(event.target.value);
  };


  const recherche = (event) => {
    const fd = new FormData();
    fd.append('ville', ville);
    fd.append('specialite', "Sexologie");


    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    axios
      .post('http://127.0.0.1:8000/api/recherche/docteurs', fd, config)
      .then((res) => {
        console.log(res.data);
        setListe(<></>)
        setListe(<Liste data={res.data}/>)
      })
      .catch((error) => console.log(error));
  };



  return (
    <Fragment>


      <div class="card">
        <div className="row">
          <div className="col-lg-12">
            <div class=" d-block card-header">

              <div class="row">
                <div class="col-8">    
                <div class="card-title h5">ecrivez le Nom de votre médecin et votre ville </div>
                  <p class="mb-0 subtitle card-text">et recevez votre sms/mail de confirmation. C’est aussi simple que ça !</p>
                </div></div></div></div></div>
        <div class="container">
          <div class="row">
            <div class="col">


              <select
                className="form-control"
                id="inputState"
                defaultValue="option-2"
                onChange={changerville}
              >

                <option value="Ariana">Ariana</option>
                <option value="Beja">Beja </option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Gabes">Gabes</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="kebili">kebili</option>
                <option value="La Manouba">La Manouba</option>
                <option value="Kef">Kef</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Médenine">Médenine</option>
                <option value="Monastir">Monastir</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Sfax">Sfax</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Tunis">Tunis</option>
                <option value="zaghouan">zaghouan</option>
              </select> </div>




            <div class="col">
              <div className="col-lg-10 mb-6">
                <div class="input-group search-area ml-auto d-inline-flex">




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
              <Button className='mr-2'
                variant='primary'
                onClick={recherche} >
                Recherche                </Button>
            </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div className="col-lg-6 mb-2">




        </div></div>
        {liste} 
     
    </Fragment>
  );
}

export default EventCalendar;
