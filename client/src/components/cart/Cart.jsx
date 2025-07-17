import { useSelector } from "react-redux";
import { Grid, Typography, Box, styled, Button } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 16px",
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("sm")]: {
    padding: "16px 8px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  display: flex;
  
  background-color: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 100%;
  max-width: 250px;
  height: 51px;
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container container spacing={2}>
          <Grid style={{ width :"70%"}}item xs={12} md={9}>
            <Header>
              <Typography variant="h6">My Cart ({cartItems.length})</Typography>
            </Header>

            {cartItems.map((item, index) => (
              <Box key={index} sx={{ overflow: "hidden" }}>
                <CartItem item={item} />
              </Box>
            ))}

            <ButtonWrapper>
              <StyledButton style={{ marginLeft: " auto" }}>Place Order</StyledButton>
            </ButtonWrapper>
          </Grid>

          <Grid item xs={12} md={3}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
