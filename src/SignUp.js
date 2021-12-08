import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function SignUp() {


  const [Uname, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (


    <div className="signup-form">
      <TextField value={Uname} onChange={(event) => setUName(event.target.value)}
        label="Enter your Name" variant="standard" /> <br />

      <TextField value={email} onChange={(event) => setEmail(event.target.value)}
        label="Enter your Email" variant="standard" /><br />
      <TextField value={password} onChange={(event) => setPassword(event.target.value)}
        label="Enter your Password" variant="standard" /><br />

      <Button onClick={SignUp} variant="contained">Sign Up</Button>

    </div>




  );
}
