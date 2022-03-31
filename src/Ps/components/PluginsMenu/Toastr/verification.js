import React from "react"; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
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
								<h4 className="card-title">Vérification</h4>

							</div>
							<div className="card-body">
              <label>
            
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <input type="submit" value="Submit" />
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
