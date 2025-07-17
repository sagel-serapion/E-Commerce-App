import { imageURL } from '../../constants/data';
import { Grid, styled, useMediaQuery, useTheme, Box } from '@mui/material';

const Wrapper = styled(Box)`
  margin-top: 10px;
  overflow-x: hidden;
`;

const Image = styled('img')({
    marginTop: 10,
    width: '100%',
    height: 400,
    objectFit: 'cover',
    objectPosition: 'top'
});
const MidSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const imgurl = "https://cordmagazine.com/wp-content/uploads/2017/07/Emporio-Armani.jpg";

  return (
   <>

   
    <Wrapper>
      <Grid
        container
        direction={isSmallScreen ? 'column' : 'row'}
        wrap="nowrap"
        spacing={2}
        justifyContent="space-between"
      >
        {imageURL.slice(0, 3).map((image, index) => (
          <Grid
            item
            key={index}
            sx={{
              width: isSmallScreen ? '100%' : 'calc(100% / 3 - 16px)', // 3 images in one row minus spacing
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              alt="image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 8,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    <Image src={imgurl} alt="health"/>
  </> 
  );
};

export default MidSection;
