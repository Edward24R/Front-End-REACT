import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/lock-outlined-icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../../App.css';


// Forgot Password Page
const ForgotPass=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Reset Password</h2>
                </Grid>
                Input your email address to reset the password.
                <TextField label='Email' placeholder='Enter email' fullWidth required/>
                
                {/* Sign In Button */}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Send me an email</Button>

                
                <Typography > 
                     
                </Typography>
            </Paper>
        </Grid>
    )
}

export default ForgotPass