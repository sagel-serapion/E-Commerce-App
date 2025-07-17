import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Box, styled, Divider, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Deal = styled(Box)`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #2874f0 0%, #1c5fb8 100%);
    opacity: 0.9;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Timer = styled(Box)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
  
  img {
    filter: brightness(0) invert(1);
  }
`;

const DealText = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  margin-right: 25px;
  line-height: 32px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProductCard = styled(Box)`
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 8px;
  background: #ffffff;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled('img')({
  width: 'auto',
  height: 150,
  objectFit: 'contain',
  margin: 'auto',
  transition: 'transform 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.05)',
  }
});

const ProductTitle = styled(Typography)`
  font-size: 14px;
  margin-top: 12px;
  font-weight: 500;
  color: #212121;
  line-height: 1.4;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Discount = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #388e3c;
  margin-top: 8px;
`;

const Tagline = styled(Typography)`
  font-size: 12px;
  color: #878787;
  margin-top: 4px;
  font-style: italic;
`;

const StyledDivider = styled(Divider)`
  margin: 0;
  background-color: #e0e0e0;
`;

const CarouselWrapper = styled(Box)`
  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }
  
  .react-multi-carousel-dot-list {
    bottom: -40px;
  }
  
  .react-multi-carousel-dot button {
    background-color: #2874f0;
    border: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .react-multi-carousel-dot--active button {
    background-color: #1c5fb8;
  }
`;

const Slide = ({ products, timer, title }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {String(hours).padStart(2, '0')} : {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')} Left
      </span>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: 24, height: 24 }} />
            <Countdown date={Date.now() + 24 * 60 * 60 * 1000} renderer={renderer} />
          </Timer>
        )}
      </Deal>
      
      <StyledDivider />
      
      <CarouselWrapper>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <Link to={`product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
              <ProductCard>
                <Image src={product.url} alt={product.title.shortTitle} />
                <ProductTitle>{product.title.shortTitle}</ProductTitle>
                <Discount>{product.discount}</Discount>
                <Tagline>{product.tagline}</Tagline>
              </ProductCard>
            </Link>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Component>
  );
};

export default Slide;