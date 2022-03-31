import axios from 'axios';
 
import React,{Component} from 'react';


class App extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
         
          <div>
            <h5> Les détails d'un fichier:</h5>
             
<p> Le nom du fichier: {this.state.selectedFile.name}</p>
 
             
<p> le type du fichier: {this.state.selectedFile.type}</p>
 
             
<p>
              Derniére modification:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}

            </p>
            <h5 className="mb-4">
                              <i className="fa fa-paperclip"></i> 
                            Attachement
                           </h5>
     
                           <div className="text-left mt-4 mb-5">
                           <div className="form-group">
                           
                                 <textarea
                                    id="email-compose-editor"
                                    className="textarea_editor form-control bg-transparent"
                                    rows="15"
                                    placeholder="Enter text ..."
                                 ></textarea>
                              </div>
                           <button
                              className="btn btn-primary btn-sl-sm mr-2"
                              type="button"
                           >
                              <span className="mr-2">
                                 <i className="fa fa-paper-plane"></i>
                              </span>
                              Envoyé
                           </button>
                         
                        </div>
          </div>
          
        );
      } else {
        return (
          <div>
            <br />
          
          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div>
            <h1>
              choisir votre fichier 
            </h1>
            
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
        
      );
    }
  }
 
  export default App;
