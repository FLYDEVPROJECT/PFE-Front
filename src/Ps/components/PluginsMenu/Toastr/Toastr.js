import React from "react";
import { Grid, Button, Box, Container, Typography } from "@material-ui/core";
import {Navlink ,Link} from 'react-router-dom'; 
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
 import verification from "./verification"; 
 import dossier from "./dossier"; 
import Card from "react-bootstrap/Card";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  img: {
    maxWidth: 200,
    marginBottom: theme.spacing(4),
  },

  title: {
    color: "#4b9fbc",
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1rem",
    lineHeight: "30px",
    textAlign: "left",
    maxWidth: 500,
  },
}));

const Massages = () => {
  const classes = useStyles();

  const massagesList = [
    {
      
      imgUrl: "/assets/images/massage-assis.png",
    
    },
   
    {
     
      imgUrl: "/assets/images/massage-9sens.png",
    
    },
  ];

  return (
    <section className="section">
      <Box mb={4} textAlign="center">
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="span"
            color="primary"
            className="text-fourth"
          >
         
    <p> <h2> C'est quoi un dossier médical partagé ? </h2></p> 
                {/*     <NavLink to="/Dossier">Créer </NavLink>
            le dossier de votre patient en seulement 2 étapes*/} 

<Card>
         
          <Card.Body>
        <h6>  Meilleur suivi grâce à un historique du patient, partage continu et en temps réel des données médicales entre les différents intervenants du parcours de patients</h6>
          </Card.Body>
        </Card>


<nav aria-label="breadcrumb">
 
</nav>


          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            paragraph={true}
          >
            
          </Typography>
        </Container>
      </Box>

    
  
   
          
          <div class="container">
  <div class="row">
    <div class="col">
    <Card.Body>
    <Link to ="/Saisiedesdonnees" className="text-black">
    
      <h5 class="card-title">Etape1 : saisie des données</h5>
      </Link>

      <img src={"https://pro.anamnese.care/hubfs/compo/logo-compo-dossierpatient1-500x500.png"} alt="" className={classes.img} />
      

          </Card.Body>
    </div>
    <div class="col"></div>
    <div class="col">
    <Card.Body>
    <Link to="/verification" className="text-black">
      <h5 class="text-black">Etape 2: Vérification </h5>
      </Link>
 
      <img src={"https://pro.anamnese.care/hubfs/compo/logo-compo-dossierpatient1-500x500.png"} alt="" className={classes.img} />
    

          </Card.Body>
              
    </div>
  </div>
  </div>
    </section>
  );
};

export default Massages;
