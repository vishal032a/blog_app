import { Box, Button, styled, TextField, Typography } from "@mui/material";
import {useState} from "react";
const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px rgb(0 0 0/0.6)
`;

const Image = styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
})

const Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button, & > p{
        margin-top:20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform:none; 
    background: #FB641B;
    height:48px;
    border-radius:2px;
`;

const SignupButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgba(0 0 0/ 20%);
`;

const Error = styled(Typography)`
    font-size:10px;
    color:#ff616;
    line-height:10px;
    font-weight:10px;
`

const Text = styled(Typography)`
    color:#878787;
    font-size:14px;
`;
const loginInitialValues = {
    username:'',
    password:''
}
const signupInitialValues = {
    name:'',
    username:'',
    password:''
}

const Login = ()=>{
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account,toggleAccount] = useState('login'); 
    const [signup,setSignup] = useState(signupInitialValues);

    const toggleSignup  = ()=>{
        account === 'signup'? toggleAccount('login') : toggleAccount('signup');
    }
    
    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }


    const [error,setError] = useState('');
    const [logindata,setLogindata] = useState(loginInitialValues);
    

    const signupUser = async()=>{

    }

    const onValuechange = (e)=>{
        setLogindata({...logindata,[e.target.name]:e.target.value})
    }

    const loginuser = async()=>{
    }
    return(
        <Component>
            <Box>
                <Image src={imageURL} alt="login"/>
                {
                    account === 'login'?
                    <Wrapper>
                    <TextField variant="standard" value={logindata.username} name="username" onChange={(e)=>onValuechange(e)} label="Enter username"/>
                    <TextField variant="standard" value={logindata.password} name="password" onChange={(e)=>onValuechange(e)} label="Enter password" />

                    {error && <Error>{error}</Error>}

                    <LoginButton variant="contained" onClick={()=>loginuser()} >Login</LoginButton>
                    <Text style={{textAlign:'center'}}>OR</Text> 
                    <SignupButton onClick={()=>{toggleSignup('signup')}}>Create an account</SignupButton>
                    </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" value={signup.name} label="Enter name" name="name" onChange={(e)=>{onInputChange(e)}}/>
                    <TextField variant="standard" value={signup.username} label="Enter username" name="username" onChange={(e)=>{onInputChange(e)}}/>
                    <TextField variant="standard" value={signup.password} label="Enter password" name="password" onChange={(e)=>{onInputChange(e)}}/>

                    {error && <Error>{error}</Error>}
                    <SignupButton onClick={()=>{signupUser()}}>Signup</SignupButton>
                    <Text style={{textAlign:'center'}}>OR</Text> 
                    <LoginButton variant="contained" onClick={()=>{toggleSignup('login')}}>Already have an account</LoginButton>
                </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;