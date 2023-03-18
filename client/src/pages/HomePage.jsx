import { Button, ButtonGroup } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const HomePage = ()=>{
    const navigate = useNavigate();
    return(
        <ButtonGroup marginLeft="500px"  marginTop="250px" >
            <Button colorScheme="whatsapp" onClick={()=>navigate("/setAdminUser")} >Create Super Admin</Button>
            <Button colorScheme="messenger" onClick={()=>navigate("/partnerLogin")} >Partner Login</Button>
        </ButtonGroup>
    )
}