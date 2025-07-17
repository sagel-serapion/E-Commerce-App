import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';

import { useState,useContext } from 'react';

import { authenticateLogin, authenticateSignup } from '../../service/api'; 

import { DataContext } from '../../context/DataProvider';


const LoginBox = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  width: 40%;
  padding: 45px 35px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 35px;
  width: 60%;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #c23305;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  &:hover { 
    background: #f1f1f1;
  }
`;

const Writing = styled(Box)`
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
   height: 100%; 
`;


const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;`


const accountInitialValues ={
  login:{
    view: 'login',
    heading:'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'

  },
  signup:{
    view: 'signup',
    heading:'Looks like you are new here!',
    subHeading: 'Sign up with your mobile number to get started'
  }
}

const signupInitialValues = {
  firstname: '', 
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}

const loginInitialValues = {
  username: '',
  password: ''
}

const LoginDialog = ({ open, setOpen }) => { 





  const [account, toggleAccount] = useState(accountInitialValues.login);

  const [signup, setSignup] = useState(signupInitialValues);

  const { setAccount}= useContext(DataContext);

  const [login, setLogin] = useState(loginInitialValues);

  const [error, setError] = useState(false);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  }

  const handleClose = () =>{
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);

  } 

  const OnInputChange =(e) => {
    setSignup({...signup,[e.target.name]: e.target.value});
    
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    
    if (!response) return;
    handleClose();
    setAccount(signup.firstname)
  };

  const OnValueChange = (e) => {
    setLogin({...login,[e.target.name]: e.target.value});
   
  }

  const loginUser = async () => {
    try{
      let response = await authenticateLogin(login);
      console.log(response);
      if (response.status === 200) {
        handleClose();
        setAccount(response.data.data.firstname);
      }else{
        setError(true);
      }
    }catch(err){
      console.error("Login failed:", err);
      setError(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} >
      <LoginBox>
        
        
        <Image>
            <Writing>
                <Typography variant="h5" >{account.heading}</Typography>
                <Typography >
                {account.subHeading}
                </Typography>
            </Writing>
          
        </Image>
    
        { account.view === 'login' ? 
        <Wrapper>
          <TextField variant="standard" onChange={(e)=> OnValueChange(e)} name='username' label="Enter Username" fullWidth />

           { error && <Error>Please enter valid username or password</Error> }

          <TextField variant="standard" onChange={(e)=> OnValueChange(e)} name='password' label="Enter Password" type="password" fullWidth />
          <Text>
            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
          </Text>
          <LoginButton fullWidth onClick={() => loginUser()}>Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <RequestOTP fullWidth>Request OTP</RequestOTP>
          <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
        </Wrapper>
        :
        <Wrapper>
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='firstname' label="Enter Firstname" fullWidth />
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='lastname' label="Enter Lastname" fullWidth />
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='username' label="Enter Username" fullWidth />
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='email' label="Enter Email" fullWidth />
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='password' label="Enter Password" fullWidth />
          <TextField variant="standard" onChange={(e)=> OnInputChange(e)} name='phone' label="Enter Phone" fullWidth />
          <LoginButton fullWidth onClick={() => signupUser()}>Continue</LoginButton>

        </Wrapper>

  }
      </LoginBox>
    </Dialog>
  );
};


export default LoginDialog;
