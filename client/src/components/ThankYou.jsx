import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const [redirect,setRedirect]=useState(false);
  const navigate = useNavigate();

  setTimeout(()=>{
    setRedirect(true);
  },2000);

  if( redirect ){
    navigate("/");
  }
  return <Box margin="auto" marginTop="20px" width="600px">
    <Image src="https://www.funimada.com/assets/images/cards/big/thank-you-2.gif" alt="thank-you" />
  </Box>;
};
