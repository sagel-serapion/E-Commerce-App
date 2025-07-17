import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const NavbarContainer = styled(Box)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding-top: 24px;
  padding-bottom: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
  }
`;

const Navbarwrap = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  margin: "0 auto",
  maxWidth: 1200,
  padding: "0 16px",
  backgroundColor: "transparent",
  position: "relative",
  
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
  
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const EachNav = styled(Box)`
  padding: 16px 12px;
  text-align: center;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  position: relative;
  
  &:hover {
    background: rgba(40, 116, 240, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(40, 116, 240, 0.15);
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  &:hover .nav-text {
    color: #2874f0;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  height: 64px;
`;

const NavImage = styled('img')`
  width: 64px;
  height: auto;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  color: #212121;
  transition: color 0.3s ease;
  line-height: 1.3;
  
  &:hover {
    color: #2874f0;
  }
`;

const ScrollIndicator = styled(Box)(({ theme }) => ({
  display: "none",
  
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 20,
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9))",
    pointerEvents: "none",
  },
}));

const NavBar = () => {
  return (
    <NavbarContainer>
      <Navbarwrap>
        {navData.map((data, index) => (
          <EachNav key={index}>
            <ImageContainer>
              <NavImage src={data.url} alt={data.text} />
            </ImageContainer>
            <Text className="nav-text">{data.text}</Text>
          </EachNav>
        ))}
        <ScrollIndicator />
      </Navbarwrap>
    </NavbarContainer>
  );
};

export default NavBar;