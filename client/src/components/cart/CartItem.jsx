import { Typography,Box ,styled,Button} from "@mui/material";

import { addEllipsis } from "../utils/common-utils";

import  ButtonGroup  from "./ButtonGroup";

import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
    display: flex;
    
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
`;

const LeftComponent = styled(Box)`
    margin-top: 20px;
    padding-right: 20px;
    display:flex;
    flex-direction: column;
    background: #fff;
    & > img {
        width: 110px;
    }
`;

const SmallText = styled(Typography)`
color: #878787;
    font-size: 14px;
    margin-top: 10px;`

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color : #000;
`;


const CartItem = ({item}) => { 

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch= useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
    <Component  >
         <LeftComponent >
           <img src={item.url} alt="product" ></img>
           <ButtonGroup />
         </LeftComponent>
         <Box style={{margin:'20px 0 0 20px',width:'60%'}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText style={{marginTop:10,color:'#878787',fontSize:14}}>Seller:RetailNet
                <Box component="span"><img src={fassured} alt="flipkart" style={{width:50,marginLeft:10}}/></Box>
            </SmallText>
            <Typography style={{marginTop:'20px 0'}}>
                <Box component="span" style={{ fontWeight: 600 , fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
      </Typography>
      <Remove onClick={() =>removeItemFromCart(item.id)}>Remove</Remove>
         </Box>
    </Component>
    )
}

export default CartItem