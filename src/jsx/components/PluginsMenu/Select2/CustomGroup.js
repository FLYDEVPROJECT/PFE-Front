import React, { useRef } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import emailjs from '@emailjs/browser';

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'pour un patient'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Confirmation des données: ' + this.state.value);
      event.preventDefault();
    }
  
    
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          	<div className="row justify-content-center">
				<div className="col-md-12 col-lg-8">
			
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">Saisie des données</h4>

							</div>
							<div className="card-body">
              <label>
              <form>
        <div class="form-group">
        <label for="exampleFormControlInput1">Numéro de dossier </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>

        </div>
        <div class="form-group">
        <label for="exampleFormControlInput1">Numéro de sécurité sociale </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>

        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nom et prénom du patient</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>

          </div>
          <div class="form-group">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Nombre de  professionenels de santé</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>

          </select>
       </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Maladies chroniques </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <input type="submit" value="Etape2" />
      </form>
      
           
            <pre></pre>
           
          </label>
									{/* <Values form="MaterialUiForm" /> */}
							</div>
						</div>
					
				</div>
				
					
			</div>		

        
        </form>
      );
    }
  }
  
export default FlavorForm;
