import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (


    <Card className="login-container">
        <CardContent>
                    <div className="login-form">
                        <TextField value={email} onChange={(event) => setEmail(event.target.value)}
                            label="Enter your email" variant="standard" /> <br />

                        <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                             label="Enter your Password" variant="standard" /><br />
                    </div>
        </CardContent>                 
            <CardActions>
                        <Button onClick={Login} variant="outlined">Login</Button>
                     
            </CardActions>         
          
    </Card>
  );
}
