import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@material-ui/core/Box';
import Stack from '@mui/material/Stack';
import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';


// import { purple } from '@mui/material/colors';

export function Homepage() {

             const paperStyle = {padding:"3px", borderRadius: "10px"}
   const imBUrl = "https://enterprise.efax.com/sf-images/default-source/Blog-Posts/secure-communications-and-messaging-in-2017-efax-corporate.jpg?sfvrsn=93df39cb_0";          
            
             
  return (

    <Grid container  justifyContent="center" alignItems="center"spacing={6} >
        
     <Grid item lg={4} >
        <Paper elevation={10} style={paperStyle} >
            
                    <Box bgcolor="#ff7043" justifyContent="center" alignItems="center" >

                            <img width={200} src='https://www.thoughtco.com/thmb/Ir1ASnrdQPmpHz2P1wB-oJ-_20A=/2001x1501/smart/filters:no_upscale()/182786404-56a9f6725f9b58b7d00038e0-dbb335ed535b491389bfca8ac9ed2be6.jpg'/>
                        <Typography variant="h5" >Find the best answer to your technical question, help others answer theirs</Typography>
                        <Button  style={{maxWidth:"300px", justifyItems:"center", backgroundColor: "#43a047", marginLeft:"140px",  marginTop:"20px"}} 
                                            variant="contained"  >Join the Community
                        </Button>
                        <Typography mt={2} ml={18} >or search content</Typography>
                    </Box>  
                    
        </Paper>
    </Grid>   
        <Grid item lg={4}>
            <Paper elevation={10} style={paperStyle}>
               <Box bgcolor="#ba68c8">
                   <img className='imgB'  src= {imBUrl} width={200}/>
                    <Typography variant='h5' >Want a secure, private space for your technical knowledge?</Typography>
                    <Typography mt={2} ml={5}>Get Started</Typography>
                 <Stack spacing={1} style={{justifyItems:"center"}}>
                    <Button  style={{maxWidth:"200px", justifyItems:"center", borderRadius: 35, margin:"20px", flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-evenly'}} variant="contained" >For large Organisations</Button>
                    <Button  style={{maxWidth:"200px", backgroundColor: "#6d4c41", margin:"20px"}} variant="contained"  >For small Teams</Button>
                 </Stack>
               </Box> 
            </Paper>
        </Grid>  
    </Grid>

  );
}

