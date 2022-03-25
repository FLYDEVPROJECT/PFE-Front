import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const StepThree = () => {
   return (
      <section>
          <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">  <strong>  Avez-vous des problèmes cardiaques </strong> </label>
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div>
          </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous déjà fumé du tabac de quelque sorte?
Veuillez indiquer quel produit</strong></label>
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous d’autres problèmes respiratoires? </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous déjà eu une maladie ou un trouble lié au sang? </strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous déjà eu des problèmes importants de mémoire ou de démence? </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Est-ce que vous ou un membre de votre famille (lié à vous par le sang)
avez eu des problèmes graves autres que des nausées et vomissements
après avoir reçu une anesthésie générale </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong>Avez-vous été admis(e) à l’hôpital dans le passé? </strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez ( Quand? Où? Pourquoi?)"                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Etes vous concerné par des problèmes de santé mentale (ex.
, crises d’angoisse, phobie des aiguilles)?</strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez ( Quand? Où? Pourquoi?)"                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong> Y’a-t-il des problèmes d’allergie dans l’anamnèse personnelle ?</strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Oui" />
        <FormControlLabel value="male" control={<Radio />} label="Non" />
      
      </RadioGroup>
    </FormControl>
          </div></div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez ( Quand? Où? Pourquoi?)"                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 
                
               

 
      </section>
   );
};

export default StepThree;
