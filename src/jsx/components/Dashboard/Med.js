import React, {Component, PropTypes} from 'react';
import TextField from '@mui/material/TextField';

import Checkbox from '@mui/material/Checkbox';
import { Row, Col, Card} from 'react-bootstrap'
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { TextareaAutosize } from '@mui/base';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default class FormInputs extends Component {

    state = {
        nom: '',
        age:'',
        ville: '',
        Antecedents:'',
        med:'',
        Diag:'',
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state.nom);

    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            age:'',
            ville: '',
            Diag:'',
            med:'',
            items: [...this.state.items, {  age: this.state.age, ville: this.state.ville,  liste: this.state.liste , med: this.state.med , Diag: this.state.Diag}]
        });
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h2>Mr/Mme {item.ville}</h2>
                       
                        <hr/>
                        <p>
                            Assisté le  {item.age} 
                        </p>
                       
                        <p>
                            a pour médicaments: {item.med}
                        </p>
                        <p>
                            Diagnostic : {item.Diag}
                        </p>
                    </div>
                </div>
            )
        })
    }
    

    render() {
        return (
            <div>
                <div className="card my-3">
                    <div className="card-header"><strong>Prescrire traitement </strong></div>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
<div> 
    <div classname="row"></div>
<div class="mb-6">

                            <div className="form-group">
                                <label>Identifiant</label>
                                <input type="text"
                                    className="form-control"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />
                            </div></div>

                            <div class="mb-6">
                             
  <label  class="form-label">Date de consultation</label>
  <input  type="datetime-local" class="form-control" id="exampleFormControlInput1"  name="age"  onChange={this.onChange}
                                    value={this.state.age} placeholder="name@example.com"></input>
</div>
                         
</div>
<br></br>

<div classname="row"></div>
<div class="mb-6">

                            <div className="form-group">
                                <label>Nom et prénom du patient</label>
                                <input type="text"
                                    className="form-control"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />
                            </div></div>

                            <label >Médicaments 
                           
                            </label>
                            <Autocomplete   
                            
      multiple
      id="checkboxes-tags-demo"
    
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
     
        <Checkbox
        
        
            checkedIcon={checkedIcon}
            style={{ marginRight: 4 }}
            checked={selected}
           
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (

        <TextField {...params} label="Médicaments"  
        style={{ width: 1030 , height : 30}} />
        
      )}
    />
      
                           <br></br> <br></br>
                           <label  >Diagnostic</label>
                           <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className="fas fa-pencil-alt prefix"></i>
        </span>
      </div>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        name="Diag"
        
                                    onChange={this.onChange}
                                    value={this.state.Diag}
      ></textarea>
    <div>
 
    </div>
    </div>
    <br></br> <br></br>
                            <button className="btn btn-primary btn-block">Créez votre Fiche !</button>
                        </form>
 
                    </div>
                </div>
                {this.renderCard()}
            </div>
            
        )
    }
   }

   const top100Films = [
    { title: 'DOLIPRANE', year: 1994 },
    { title: 'EFFERALGAN', year: 1972 },
    { title: 'DAFALGAN', year: 1974 },
    { title: 'LEVOTHYROX', year: 2008 },
    { title: 'IMODIUM', year: 1957 },
    { title: "KARDEGIC", year: 1993 },
    { title: 'KARDEGIC ', year: 1994 },
    {
      title: 'ISIMIG ',
      year: 2003,
    },
    { title: 'TAHOR', year: 1966 },
    { title: 'MAGNE B6', year: 1999 },
    {
      title: 'PIASCLEDINE',
      year: 2001,
    },
    {
      title: 'CLAMOXYL ',
      year: 1980,
    },
    { title: 'PIASCLEDINE', year: 1994 },
    { title: 'LAMALINE', year: 2010 },
    {
      title: 'ORELOX',
      year: 2002,
    },
    { title: "INEXIUM", year: 1975 },
    { title: 'AUGMENTIN ', year: 1990 },
    { title: 'DEXERYL ', year: 1999 },
    { title: 'LASILIX', year: 1954 },
    {
      title: 'ENDOTELON',
      year: 1977,
    },
    { title: 'TEMESTA', year: 2002 },
    { title: 'SOLUPRED', year: 1995 },
    { title: 'PNEUMOREL', year: 1991 },
    { title: "PREVISCAN", year: 1946 },
    { title: 'SERESTA', year: 1997 },
    { title: 'DIAMICRON', year: 1995 },
    { title: 'DERINOX', year: 1994 },
    { title: 'DIFFU-K', year: 2001 },
    { title: 'BETADINE', year: 1998 },
    { title: 'STABLON', year: 1968 },
    { title: 'DEBRIDAT', year: 1998 },
    { title: 'TOPALGIC', year: 2014 },
  ];