import React, { Component } from 'react'
import { Link } from "react-router-dom";
class dossier extends Component {
  render() {
    
    return (
       
        <form>
        <div class="form-group">
        <label for="exampleFormControlInput1">Numéro de dossier </label>
        <label for="exampleFormControlInput1">Numéro de sécurité sociale </label>
          <label for="exampleFormControlInput1">Nom et prénom du patient</label>
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
      </form>
      
    )
  }
}
export default dossier;