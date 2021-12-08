import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (


    
        
                    <div className="login-form">
                        <TextField value={email} onChange={(event) => setEmail(event.target.value)}
                            label="Enter your email" variant="standard" /> <br />

                        <TextField value={password} onChange={(event) => setPassword(event.target.value)}
                             label="Enter your Password" variant="standard" /><br />
                                            
            
                        <Button onClick={Login} variant="contained">Login</Button>
                    </div>    
                     
                  
          
    
  );
}
