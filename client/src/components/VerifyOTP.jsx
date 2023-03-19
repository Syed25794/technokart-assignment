import {Flex, Stack , Center, Heading ,HStack, PinInput, PinInputField, useColorModeValue, FormControl, Button } from "@chakra-ui/react"

export const VerifyOTP = ()=>{

    return (
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
                    username@mail.com
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack spacing={6}>
                    <Button bg={'blue.400'} color={'white'} _hover={{   bg: 'blue.500',}}>
                        Verify
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}