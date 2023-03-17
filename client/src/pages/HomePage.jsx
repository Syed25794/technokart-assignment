import { Button, ButtonGroup } from '@chakra-ui/react';

export const HomePage = ()=>{
    return(
        <ButtonGroup marginLeft="450px"  marginTop="250px" >
            <Button colorScheme="whatsapp" >Super Admin Login</Button>
            <Button colorScheme="messenger" >Partner Login</Button>
        </ButtonGroup>
    )
}