

import{ Box,Button,ButtonGroup,styled } from "@mui/material";


const Component = styled(Box)`
    margin-top: 30px;`;

const StyledButton = styled(Button )`
    border-radius: 50%;`;

const GroupedButton = () => {

    
    return (
       <Component>
           <ButtonGroup>
               <StyledButton>-</StyledButton>
               <Button disabled>1</Button>
               <StyledButton>+</StyledButton>
           </ButtonGroup>
       </Component>
    );
}

export default GroupedButton;