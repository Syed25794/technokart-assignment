import {Flex, Stack , Center, Heading ,HStack, PinInput, PinInputField, useColorModeValue, FormControl, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { sendOTP } from "../redux/action";

export const VerifyOTP = ()=>{
    const {otp,email} = useSelector((store)=>store);
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const [isVerify,setIsVerify]=useState("");
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const resendOTP=()=>{
        console.log(email);
        dispatch(sendOTP({partner_email:email}));
    }

    const handlePin=()=>{
        const pin1Value = pin1Ref.current.value;
        const pin2Value = pin2Ref.current.value;
        const pin3Value = pin3Ref.current.value;
        const pin4Value = pin4Ref.current.value;
    
        const pinValue = `${pin1Value}${pin2Value}${pin3Value}${pin4Value}`;

        pin1Ref.current.value=null;
        pin2Ref.current.value=null;
        pin3Ref.current.value=null;
        pin4Ref.current.value=null;

        if( otp === pinValue ){
            setIsVerify(true);
            setTimeout(()=>{
                setIsVerify("");
            },500);
        }else if( otp === 0 ){
            console.log("otp expired");
        }else{
            setIsVerify(false);
            setTimeout(()=>{
                setIsVerify("");
            },500)
        }
      }

      if( isVerify ){
        navigate("/add_event")
      }

    return (
        <>
        { otp === 0 && <Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          OTP Expired!
        </Alert>}
        { isVerify && <Alert status="success" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          OTP Verified Successfully!
        </Alert>}
        { isVerify === false && <Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Wrong OTP!
        </Alert>}
        <Flex flexDir="column" minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack boxShadow="lg" spacing={4}  w={'full'}  maxW={'sm'}   rounded={'xl'}  p={6}  my={10}>
                <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify OTP
                    </Heading>
                </Center>
                <Center fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent OTP to your email
                </Center>
                <Center fontSize={{ base: 'sm', sm: 'md' }} fontWeight="bold" color={useColorModeValue('gray.800', 'gray.400')}>
                    {email}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput>
                                <PinInputField ref={pin1Ref} />
                                <PinInputField ref={pin2Ref} />
                                <PinInputField ref={pin3Ref} />
                                <PinInputField ref={pin4Ref} />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                { otp === 0 && (<Center>
                    <Stack spacing={4} w="120px">
                        <Button onClick={resendOTP}  colorScheme="whatsapp">Resend OTP</Button>
                    </Stack>
                </Center>)}
                <Stack spacing={6}>
                    <Button bg={'blue.400'} onClick={handlePin} color={'white'} _hover={{   bg: 'blue.500',}}>
                        Verify
                    </Button>
                </Stack>
            </Stack>
        </Flex>
        </>
    )
}