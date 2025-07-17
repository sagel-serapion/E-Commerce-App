import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";



const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
  background: #f2f2f2;
`;
const Image = styled("img")({
  padding: "15px",
});

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 90%;
`;

const StyledButton = styled(Button)`
  min-width: 180px;
  height: 50px;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const { id, price, title } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    const res = await fetch("http://localhost:8000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: price.cost }), // assuming product.price.cost = 1199
    });

    const data = await res.json();

    const options = {
      key: "rzp_test_8G42Ub3DhntQ0B", // Replace with your real Razorpay Key ID
      amount: data.amount,
      currency: "INR",
      name: "My Ecom App",
      description: title.shortTitle,
      order_id: data.id,
      handler: function (response) {
        alert("Payment successful. ID: " + response.razorpay_payment_id);
        // Optionally: send this info to your backend to store payment details
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <LeftContainer>
      <Box
        style={{
          width: "90%",
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} />
      </Box>
      <ButtonBox>
        <StyledButton
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
          onClick={addItemToCart}
        >
          <ShoppingCartIcon />
          Add to Cart
        </StyledButton>
        <StyledButton
          variant="contained"
          style={{ background: "#fb641b" }}
          onClick={buyNow}
        >
          <FlashOnIcon />
          Buy Now
        </StyledButton>
      </ButtonBox>
    </LeftContainer>
  );
};

export default ActionItem;
