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
         <section className="section">
        <form onSubmit={this.handleSubmit}>
          	<div className="row justify-content-center">
				<div className="col-md-12 col-lg-8">
			
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">Vérification</h4>

							</div>
							<div className="card-body">
              <label>
            
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Il s'agit d'un patient </option>
        
            </select>
            <pre></pre>
            <input type="submit" value="Confirmation" />
          </label>
									{/* <Values form="MaterialUiForm" /> */}
							</div>
						</div>
					
				</div>
				
					
			</div>		

        
        </form>
        </section>
      );
    }
  }
  
export default FlavorForm;
