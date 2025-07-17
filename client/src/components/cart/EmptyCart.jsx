import { Typography,Box,styled } from "@mui/material";


const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    text-align: center;

    img {
        width: 500px;
        height: 500px;
        object-fit: contain;
    }

    & > p {
        margin-top: 20px;
        font-size: 18px;
        color: #333;
    }
`;


const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';


    return (
        <Box>
            <Component>
                <img src={imgurl} alt="empty cart" />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now.</Typography>
            </Component>
            
            

        </Box>
    );
}

export default EmptyCart;