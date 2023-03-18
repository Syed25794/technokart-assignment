import { Alert, AlertIcon, Box, Button, Card, CardBody, FormControl, Heading, Input, InputGroup, Spinner, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from "../redux/action";

export const LoginAdminUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuth , isError, isLoading } = useSelector((store)=> store );
  const [isCredential,setIsCredential]=useState(false);
  const navigate = useNavigate();
  const dispatch= useDispatch();

  if( isAuth ){
    setTimeout(()=>{
      navigate("/dashboard");
    },1000)
  }
  
  const adminLogin=(e)=>{
    e.preventDefault();
    console.log(email,password===undefined,"email",email,typeof email);
    if( email === undefined || password === undefined ){
      setIsCredential(true);
      setTimeout(()=>{
        setIsCredential(false);
      },1000)
    }else{
      setEmail("");
      setPassword("");
      dispatch(loginAdmin({email,password}));
    }
  }
  
  return (
    <Box>
      {isAuth ? (
        <Alert status="success" w="400px" m="auto" marginTop="10px">
          <AlertIcon />
          Admin Logined Successfully
        </Alert>
      ) : null}{" "}
      {isError ? (
        <Alert status="error" w="400px" m="auto" marginTop="10px">
          <AlertIcon />
          Please provide correct and full credetial!
        </Alert>
      ) : null}
      {isCredential ? (<Alert status="error" w="400px" m="auto" marginTop="10px">
          <AlertIcon />
          Please provide all the credential!
        </Alert>) : null }
      <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" w="lg" m="auto" marginTop="50px" >
        <Stack>
          <CardBody>
            <Heading textAlign="center" size="lg">
              Login Admin
            </Heading>
            <form>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" w="450px" >
                <FormControl>
                  <InputGroup alignItems="center">
                    <Box w="120px">
                      <label>Email : </label>
                    </Box>
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} w="300px" marginLeft="10px" type="email" placeholder="Enter Email Address" />
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
                <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full" onClick={(e)=>adminLogin(e)} >
                  {isLoading ? <Spinner /> : null}
                  Login Admin
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};
