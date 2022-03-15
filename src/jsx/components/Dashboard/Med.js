import React, { Component } from 'react'

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
                        <h2>Mr/Mme {item.ville}</h2>
                       
                        <hr />
                        <p>
                            Assisté le  {item.age} 
                        </p>
                        <p>
                           est  {item.nomp}.
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
                                <label htmlFor="age">Date de consultation</label>
                                <input class="datepicker" data-date-format="mm/dd/yyyy"
                                
                                    className="form-control form-control-lg"
                                    name="age"
                                    onChange={this.onChange}
                                    value={this.state.age}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ville">Nom et prénom Du Patient</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="ville"
                                    onChange={this.onChange}
                                    value={this.state.ville}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Saisir votre ordonnance médicale</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nomp "
                                    onChange={this.onChange}
                                    value={this.state.nomp }
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

