

import {Box,Button, Typography ,styled, Badge} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
// components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useSelector } from "react-redux";// Assuming cartItems is exported from this file

//state

import { useState} from 'react';

const Wrapper =styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p, & > div {
    margin-right:40px;   
    font-size:16px; 
    align-items:center;
    }
`;

const Container =styled(Link)`
    display:flex;
    text-decoration:none;
    color:inherit;
    margin-top:3px;
    & > svg {
        margin-right: 8px;
    }
`

const LoginButton =styled(Button)`
        color:#2874f0;
        background:#FFFFFF;
        text-transform:none;
        padding: 5px 40px;
        border-radius:2px;
        box-shadow:none;
        font-weight:600;
        height: 32px;

`


const CustomButtons =() => {

    const [open,setOpen]= useState(false);


    const { account,setAccount} = useContext(DataContext);


    const { cartItems } = useSelector((state) => state.cart); // Assuming cartItems is exported from this file
    const openDialog = () => {
        setOpen(true);
    }   

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant ="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            

            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3,width:135}}>More</Typography>

            <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCart/>
            </Badge>
                <Typography style={{ marginLeft: 8 }}>Cart</Typography>

            </Container >
            <LoginDialog open={open} setOpen={setOpen}/>
        
        </Wrapper>
    )
}

export default CustomButtons;