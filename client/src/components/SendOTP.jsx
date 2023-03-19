import { Stack , Center, Heading , Input, Text, useColorModeValue, FormControl, Button, Box, Spinner, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../redux/action";

export const SendOTP = () => {
    const [partner_email,setPartnerEmail]=useState();
    const dispatch = useDispatch();
    const { otp , login_link ,isLoading,isError} = useSelector((store)=>store);
    const navigate = useNavigate();
    console.log(otp,login_link);

    if( otp && login_link ){
        setTimeout(()=>{
            const endPoint = login_link.split("/");
            console.log(endPoint,otp,endPoint[endPoint.length-2]);
            navigate(`/${endPoint[endPoint.length-2]}/login`)
        },1000)
    }

    const handleOtp=(e)=>{
        e.preventDefault();
        const payload = { partner_email };
        console.log(payload);
        setPartnerEmail("");
        dispatch(sendOTP(payload));
    }
  return (
    <Box>
        { otp !== 0 && <Alert status="success" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          OTP Sended Successfully
        </Alert>}
        { isError  && <Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Either partner not added or something went wrong Try again! 
        </Alert>}
        <Center>
            <Stack boxShadow={"lg"} spacing={4} w={"full"} maxW={"md"} rounded={"xl"} p={6} my={12}>
                <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                        Send OTP to your email
                    </Heading>
                </Center>
                <Center>
                    <Text fontSize={{ base: "sm", sm: "md" }} color={useColorModeValue("gray.800", "gray.400")} >
                        You&apos;ll get otp and login link on your email
                    </Text>
                </Center>
                <FormControl id="email">
                    <Input placeholder="Enter your email address" onChange={(e)=>setPartnerEmail(e.target.value)} _placeholder={{ color: "gray.500" }} type="email"/>
                </FormControl>
                <Stack spacing={6}>
                    <Button bg={"blue.400"} color={"white"} onClick={handleOtp} _hover={{ bg: "blue.500"}}>
                        {isLoading && <Spinner /> }Get OTP
                    </Button>
                </Stack>
            </Stack>
        </Center>
    </Box>
  );
};
