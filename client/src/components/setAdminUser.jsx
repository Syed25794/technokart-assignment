import {Alert,AlertIcon,Box,Button,Card,CardBody,FormControl,Heading,Input,InputGroup,Spinner,Stack,} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SetAdminUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [iscreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState(false);


  const navigate = useNavigate();
  const createAdmin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const payload = {adminName: name,email,password};
    setName("");
    setEmail("");
    setPassword("");
    if (payload.adminName && payload.email && payload.password) {
      try {
        let response = await fetch(
          "https://technokart-backend.onrender.com/super-admin/createSuperAdmin",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
          }
        );
        let result = await response.json();
        console.log(result);
        setIsLoading(false);
        setIsCreated(true);
        setTimeout(() => {
          setIsCreated(false);
          navigate("/adminLogin");
        }, 1000);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }else{
      setIsError(true);
      setTimeout(()=>{
        setIsError(null);
        setIsLoading(false);
      },1000)
    }
  };

  return (
    <Box>
      {iscreated ? (
        <Alert status="success" w="400px" m="auto" marginTop="10px">
          <AlertIcon />
          Admin Created Successfully
        </Alert>
      ) : null}{" "}
      {isError ? (
        <Alert status="error" w="400px" m="auto" marginTop="10px">
          <AlertIcon />
          Please provide all the credential!
        </Alert>
      ) : null}
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
                <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full" onClick={createAdmin}>
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
