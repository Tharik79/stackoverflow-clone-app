import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const paperStyle =  { borderRadius: "10px", padding:"20px", Height: "100vh", width:"300px", margin:"20px auto"}

  return (
            

                <Grid mt="50px" align="center">
                  <Paper elevation={10} style={ paperStyle}>
                    

                        <Typography variant="h4" marginTop="40px"> LOGIN </Typography>
                        
                        
                        <TextField value={email} type="email" onChange={(event) => setEmail(event.target.value)}
                            label="Enter your email" variant="standard"  fullWidth/> <br />

                        <TextField value={password} type="password" onChange={(event) => setPassword(event.target.value)}
                             label="Enter your Password" variant="standard" marginTop="20px" fullWidth/><br />
                        
                        <FormControlLabel control={<Checkbox Checked color="primary"/>} label="Remember me"/>

                        <Button onClick={Login} variant="contained" marginTop="20px" fullWidth>Login</Button>

                        <Typography variant="h6" marginTop="20px">
                               New User ? <Link to="/signup" onClick={() => history.push('/signup')}>Sign Up</Link>
                        </Typography>

                     
                  </Paper>  
                </Grid>    
                     
                  
          
    
  );
}
