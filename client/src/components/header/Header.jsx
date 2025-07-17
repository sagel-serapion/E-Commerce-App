import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import { ShoppingBag, Plus } from 'lucide-react';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    height: 70px;
    box-shadow: 0 4px 12px rgba(30, 64, 175, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-1px);
    }
`;

const LogoIcon = styled(ShoppingBag)`
    width: 32px;
    height: 32px;
    color: #ffffff;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

const LogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const LogoText = styled(Typography)`
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const PlusText = styled(Box)`
    color: #fbbf24;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, transparent, #fbbf24, transparent);
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;

const PlusIcon = styled(Plus)`
    width: 12px;
    height: 12px;
    color: #fbbf24;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    animation: pulse 3s infinite;
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    padding: '8px 40px 8px 36px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const StyledToolbar = styled(Toolbar)`
    min-height: 70px;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledToolbar>
                <Component to="/">
                    <LogoContainer>
                        <LogoIcon />
                        <Box>
                            <LogoText>ShopCart</LogoText>
                            <SubHeading>
                                Explore&nbsp;
                                <PlusText component="span">Plus</PlusText>
                                <PlusIcon />
                            </SubHeading>
                        </Box>
                    </LogoContainer>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </StyledToolbar>
        </StyledHeader>
    );
};

export default Header;