import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Box, styled, Grid } from "@mui/material";

import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

// Styled container for page background
const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
  padding: 20px 0;
`;

// Main container for product details layout
const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  padding: '20px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin:0
    
  },
}));

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (!product || id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {!loading && product && Object.keys(product).length > 0 && (
        <Container container spacing={2}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>

          <Grid item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </Grid>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
