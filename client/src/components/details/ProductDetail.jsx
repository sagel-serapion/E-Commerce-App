import { Box, TableBody, TableCell, Typography, styled, Table, TableRow } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 16px;
`;

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;

     
  }
`;

const ProductDetail = ({ product }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const formatDescription = (text, wordsPerLine = 15) => {
  const words = text.split(' ');
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
};

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} alt="assured" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>

      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
      </Typography>

      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Bank Offer</strong> 100% Cashback upto ₹500 on Axis Bank SuperMoney Rupay CC UPI transactions on super.money UPI T&C
        </Typography>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Bank Offer</strong> 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter T&C
        </Typography>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Bank Offer</strong> 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C
        </Typography>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Special Price</strong> Get extra 69% off (price inclusive of cashback/coupon) T&C
        </Typography>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C
        </Typography>
        <Typography variant="body2" gutterBottom>
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Bank Offer</strong> 10% off up to ₹1,250 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above T&C
        </Typography>
        <Typography variant="body2">
          <StyledBadge fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
          <strong>Bank Offer</strong> Flat ₹10 Instant Cashback on Paytm UPI Trxns. Min Order Value ₹500. Valid once per Paytm account T&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
          </ColumnText>
          <ColumnText >
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ fontWeight: 600, color: '#2874f0' }}>SuperComNet</Box>
              <Typography style={{ fontSize: 14 }}>GST invoice available</Typography>
              <Typography style={{ fontSize: 14 }}>View more sellers starting from ₹ {product.price.cost}</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="ad" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
           <TableCell>
    {formatDescription(product.description).map((line, index) => (
      <Typography 
        key={index}
        style={{ 
          fontSize: 14, 
          marginBottom: 4 
        }}
      >
        {line}
      </Typography>
    ))}
  </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
