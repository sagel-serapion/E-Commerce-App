import { Box, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";

const Header = styled(Box)`
    padding: 15px 24px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 600;
`;

const Container = styled(Box)`
    padding: 16px 22px;
    background-color: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin: 20px 0;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        if (!cartItems || cartItems.length === 0) {
            setPrice(0);
            setDiscount(0);
            return;
        }

        let totalPrice = 0, totalDiscount = 0;
        cartItems.forEach(item => {
            const qty = item.quantity || 1;
            totalPrice += item.price.cost * qty;
            totalDiscount += (item.price.mrp - item.price.cost) * qty;
        });

        setPrice(totalPrice);
        setDiscount(totalDiscount);
    }, [cartItems]);

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>
                    Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>
                    Discount
                    <Price component="span">₹{discount}</Price>
                </Typography>
                <Typography>
                    Delivery charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6">
                    Total Amount
                    <Price component="span">₹{price + 40}</Price>
                </Typography>
                <Discount>
                    You will save ₹{discount} on this order
                </Discount>
            </Container>
            
        </Box>
    );
};

export default TotalView;
