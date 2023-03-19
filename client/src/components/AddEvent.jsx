import { Box, Flex, useColorModeValue, InputGroup, Stack, Heading, HStack, Input, FormControl, FormLabel, Button, Select, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../redux/action";
import countries from './../data/countries.json';

export const AddEvent = () => {
  const [data,setData]=useState({ event_name:"", country:"", state:"", city:"", pincode:"", event_photo:""});
  const { name, isLoading, isError, isCreated } = useSelector((store)=>store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange=(e)=>{
    const { value, name} = e.target;
    if( name === "event_photo" ){
      setData({...data,[name]:e.target.files[0]});
    }else{
      setData({...data,[name]:value});
    }
    console.log(data);
  }

  if( isCreated ){
    navigate("/thankyoupage");
  }

  const addEventSend=()=>{
    setData({event_name:"", country:"", state:"", city:"", pincode:"", event_photo:""});
    dispatch(addEvent(data));
  }
  return(
    <>
    {isError && <Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Something went wrong in adding event!
        </Alert>}
    <Flex minH={'100vh'}  align={'center'}  justify={'center'}  bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Partner Name</FormLabel>
                  <Input value={name} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Event Name</FormLabel>
                  <Input onChange={handleChange}Input name="event_name" type="text" />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="email" isRequired>
                  <FormLabel>State</FormLabel>
                  <Input onChange={handleChange} name="state" type="email" />
                </FormControl>
              </Box>
              <Box>
                <FormControl  isRequired>
                  <FormLabel>City</FormLabel>
                  <InputGroup>
                    <Input onChange={handleChange} name="city" type="text" />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Pincode</FormLabel>
              <InputGroup>
                <Input onChange={handleChange} name="pincode" type="text" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Select name="country" onChange={handleChange}> 
                <option>Choose Country</option>
                {countries.map((country,index)=>(
                  <option key={index}>{country.country}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Event Photo</FormLabel>
              <InputGroup>
                  <Input onChange={handleChange} name="event_photo" type="file" />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={addEventSend} loadingText="Submitting" size="lg" bg={'blue.400'} color={'white'} _hover={{   bg: 'blue.500'}}>
                {isLoading && <Spinner />}Add Event
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
};
