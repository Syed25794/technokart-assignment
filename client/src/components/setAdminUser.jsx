import {Alert,AlertIcon,Box,Button,Card,CardBody,FormControl,Heading,Input,InputGroup,Spinner,Stack,} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAdmin } from "../redux/action";

export const SetAdminUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isError, isLoading ,isCreated} = useSelector((store)=> store );
  const [isCredential,setIsCredential]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isError,isLoading,isCreated);

  if( isCreated ){
    setTimeout(()=>{
      navigate("/adminLogin");
    },1000)
  }

  const setAdmin=(e)=>{
    e.preventDefault();
    if( name === undefined || email === undefined || password === undefined ){
      setIsCredential(true);
      setTimeout(()=>{
        setIsCredential(false);
      },1000)
    }else{
      setEmail("");
      setName("");
      setPassword("");
      dispatch(createAdmin({name,email,password}));
    }
  }

  return (
    <Box>
      {isCreated ? (
        <Alert status="success" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Admin Created Successfully
        </Alert>
      ) : null}{" "}
      {isError ? (
        <Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Login Credential are incorrect!
        </Alert>
      ) : null}
      {isCredential ? (<Alert status="error" w="400px" m="auto" marginTop="10px" >
          <AlertIcon />
          Please provide all the credential!
        </Alert>) : null }
      <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" w="lg" m="auto" marginTop="50px">
        <Stack>
          <CardBody>
            <Heading textAlign="center" size="lg">
              Create Admin
            </Heading>
            <form>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" w="450px">
                <FormControl>
                  <InputGroup alignItems="center">
                    <Box w="120px">
                      <label>Admin Name : </label>
                    </Box>
                    <Input onChange={(e) => setName(e.target.value)} value={name} w="300px" marginLeft="10px" type="text" placeholder="Enter Name"/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup alignItems="center">
                    <Box w="120px">
                      <label>Email : </label>
                    </Box>
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} w="300px" marginLeft="10px" type="email" placeholder="Enter Email Address"/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup alignItems="center">
                    <Box w="120px">
                      <label>Password : </label>
                    </Box>
                    <Input onChange={(e) => setPassword(e.target.value)} value={password} w="300px" marginLeft="10px" type="password" placeholder="Enter Password" />
                  </InputGroup>
                </FormControl>
                <Button borderRadius={0} disabled={isLoading} type="submit" variant="solid" colorScheme="teal" width="full" onClick={(e)=>setAdmin(e)}>
                  {isLoading ? <Spinner /> : null}
                  Create Admin
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};
