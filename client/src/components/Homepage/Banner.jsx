import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled, Box } from "@mui/material";
import { bannerData } from "../../constants/data";

const BannerContainer = styled(Box)`
  position: relative;
  margin: 20px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    pointer-events: none;
    z-index: 2;
  }
`;

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-list {
    border-radius: 16px;
    overflow: hidden;
  }
  
  .react-multi-carousel-item {
    position: relative;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  .react-multi-carousel-dot-list {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }
  
  .react-multi-carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      background: rgba(255, 255, 255, 0.7);
      transform: scale(1.2);
    }
  }
  
  .react-multi-carousel-dot--active {
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    transform: scale(1.3);
  }
  
  .react-multi-carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: #ffffff;
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
    }
    
    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-right: 2px solid #374151;
      border-bottom: 2px solid #374151;
    }
  }
  
  .react-multi-carousel-arrow--left {
    left: 20px;
    
    &::before {
      transform: rotate(135deg);
      margin-left: 3px;
    }
  }
  
  .react-multi-carousel-arrow--right {
    right: 20px;
    
    &::before {
      transform: rotate(-45deg);
      margin-right: 3px;
    }
  }
  
  .react-multiple-carousel__arrow--disable {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 320,
  objectFit: 'cover',
  transition: 'all 0.3s ease',
  position: 'relative',
  
  [theme.breakpoints.down('md')]: {
    height: 200,
  },
  
  [theme.breakpoints.down('sm')]: {
    height: 180,
  }
}));

const ImageOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  .react-multi-carousel-item:hover & {
    opacity: 1;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <BannerContainer>
      <StyledCarousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((data, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <Image src={data.url} alt={`banner-${index}`} />
            <ImageOverlay />
          </Box>
        ))}
      </StyledCarousel>
    </BannerContainer>
  );
};

export default Banner;