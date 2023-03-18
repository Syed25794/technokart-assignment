import { Alert, AlertIcon, Box, Button, Card, CardBody, FormControl, Heading, Input, InputGroup, Spinner, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const LoginAdminUser = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();


  const loginAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {email,password};
    setEmail("");
    setPassword("");
    if( email && password ){
      try {
        let response = await fetch(
          "https://technokart-backend.onrender.com/super-admin/login",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
          }
        );
        let result = await response.json();
        console.log(result);
        setIsLoading(false);
        if( !result.result === undefined || result.result  ){
          console.log(isLogin);
          setIsLogin(true);
          console.log(isLogin);
        }else{
          console.log(isError);
          setIsError(true);
          console.log(isError);
        }
        console.log(result.result,isError,isLogin);
        setTimeout(() => {
          if( isLogin ){
            navigate("/dashboard");
          }else{
            setIsError(false);
            setIsLoading(false);
          }
        }, 1000);
      } catch (error) {
        setIsError(true);
        setTimeout(()=>{
          setIsError(false);
          setIsLoading(false);
        },1000)
      }
    }else{
      setIsError(true);
      setTimeout(()=>{
        setIsError(false);
        setIsLoading(false);
      },1000)
    }
  };

  return (
    <Box>
      {isLogin ? (
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
                <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full" onClick={(e)=>loginAdmin(e)} >
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
