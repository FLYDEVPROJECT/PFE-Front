import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StepOne = () => {
   return (
      <section>
         <div className="row">
         <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Nom *</strong></label>
                  <input
                              autoFocus

                     type="text"
                     name="firstName"
                     className="form-control"
                     placeholder="Parsley"
                     required
                  />
               </div>
            </div>


          <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Prénom *</strong></label>
                  <input
                     type="text"
                     name="lastName"
                     className="form-control"
                     placeholder="Montana"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
            
            <div className="form-group">

                   
<label className="text-label"><strong>Joindrez votre photo</strong></label>
<input type="file"
id="avatar" name="avatar"
accept="image/png, image/jpeg"  className="form-control"/>
</div>   

            </div>
            <div className="col-lg-6 mb-2">
            <FormControl>
            <label className="text-label"><strong>Sexe</strong></label>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>


            </div>
            <div className="col-lg-12 mb-3">
            <div className="form-group">
                <label className="text-label"><strong>Date de Naissance*</strong></label></div>
                <input
                      type="Date"
                      className="form-control"
                      id="inputGroupPrepend2"
                      aria-describedby="inputGroupPrepend2"
                      required
                   />  
             
            </div>
         </div>
         <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Numéro de télephone</strong></label>
                  <input
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="(+216)"
                      required
                   />
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Adresse E-mail*</strong></label>
                  <input
                     type="text"
                     name="lastName"
                     className="form-control"
                     placeholder="Montana@gmail.com"
                     required
                  />
               </div>
            </div></div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Ville *</strong></label>
                  <select
                                                   className="form-control"
                                                   id="inputState"
                                                   defaultValue="option-1"
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
                                                 </select>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong>Adresse *</strong></label>
                   <input
                      type="Text"
                      className="form-control"
                      required
                      placeholder="rue .. "

                   />
               </div>
            </div></div>
            <div className="col-lg-6 mb-2">
                <div className="form-group">
                <label className="text-label"><strong>Code Postal *</strong></label>
                   <input
                      type="number"
                      className="form-control"
                      placeholder="3000"
                   />
             </div>
             </div>
      </section>
   );
};

export default StepOne;
