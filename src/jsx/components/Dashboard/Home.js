import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'; 

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
 
            <Carousel>
                <div>
                    <img src="https://storage.googleapis.com/lf-wp-upload-a9b40dab/sites/9/2017/11/medecin-conventionne.jpg" />
                 
                </div>
                <div>
                    <img src="https://emerging-europe.com/wp-content/uploads/2018/01/bigstock-Male-Doctor-In-The-Hospital-190586731.jpg" />
                    
                </div>
                <div>
                    <img src="https://cdn.vidyohealth.com/wp-content/uploads/2021/03/Doctor-iPad.jpg" />
                    
                </div>
            </Carousel>
            <div class="container">
  <div class="row">
    <div class="col">
   
    </div>
    <div class="col-6">
    <h1 class="maintxt">Pourquoi prendre rendez-vous avec HC?</h1>
    </div>
    <div class="col">
     
    </div>
  </div>

</div>
           
            
            <div class="pf-row">



</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="wpb_column col-lg-4 col-md-4 col-sm-4 col-xs-12 col-xss-12"><img src="https://cdn.med.tn/img/step1.svg" ></img><p><h6>Accédez rapidement à votre médecin</h6></p></div>
    </div>
    <div class="col-sm">
    <div class="wpb_column col-lg-4 col-md-4 col-sm-4 col-xs-12 col-xss-12"><img src="https://cdn.med.tn/img/step2.svg" ></img><p> <h6> Prenez rendez-vous en ligne à tout moment</h6></p></div>
    </div>
    <div class="col-sm">
    <div class="wpb_column col-lg-4 col-md-4 col-sm-4 col-xs-12 col-xss-12"><img src="https://cdn.med.tn/img/step3.svg" ></img><p><h6>Recevez des sms/mail de rappel personnalisés</h6></p></div>
    </div>
  </div>
</div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}