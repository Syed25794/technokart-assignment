import { Stack , Center, Heading , Input, Text, useColorModeValue, FormControl, Button, Box } from "@chakra-ui/react"
import { useState } from "react";
// import { useDispatch } from "react-redux";

export const SendOTP = () => {
    const [partner_email,setPartnerEmail]=useState();
    // const dispatch = useDispatch();

    const handleOtp=(e)=>{
        e.preventDefault();
        const payload = { partner_email };
        console.log(payload);
    }
  return (
    <Box>
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
                        Get OTP
                    </Button>
                </Stack>
            </Stack>
        </Center>
    </Box>
  );
};
