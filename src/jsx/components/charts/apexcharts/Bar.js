import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
export default class FormInputs extends Component {

    state = {
        nom: '',
        age: '',
        ville: '',
        Antecedents:'',
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
            nom: '',
            age: '',
            ville: '',
            nomp:'',
            liste:'',
            antecedents:'',
            items: [...this.state.items, { nom: this.state.nom, age: this.state.age, ville: this.state.ville, nomp: this.state.nomp, liste: this.state.liste, Antecedents: this.state.Antecedents }]
        });
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h2>{item.nom}</h2>
                        <hr />
                        <p>
                            Tu as {item.age} ans.
                        </p>
                        <p>
                            Tu vis à {item.ville}.
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
                    <div className="card-header">Ajouter un patient</div>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label htmlFor="nom">Identifiant</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="age">Date D'adhésion</label>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DateTimePicker
    renderInput={(props) => <TextField {...props} />}
    label="DateTimePicker"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ville">Nom Du Patient</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="ville"
                                    onChange={this.onChange}
                                    value={this.state.ville}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Nom Du Patient</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nomp "
                                    onChange={this.onChange}
                                    value={this.state.nomp }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Liste Des Médecins</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="liste"
                                    onChange={this.onChange}
                                    value={this.state.liste}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Antécedents Médicaux</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="antecedents"
                                    onChange={this.onChange}
                                    value={this.state.antecedents}
                                />
                            </div>

                            <button className="btn btn-primary btn-block">Créez votre Fiche !</button>
                        </form>

                    </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
   }

