import { FormControl,Input,InputGroup,Modal,Box,Button,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay,Stack} from '@chakra-ui/react';
import { useState } from "react";


export const EditModal = ({ isOpen, onClose, userDetails }) => {
    const [name,setName]=useState(userDetails.partner_name);
    const [email,setEmail]=useState(userDetails.partner_email);

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Partner Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                  w="450px"
                >
                  <FormControl>
                    <InputGroup alignItems="center">
                      <Box w="120px">
                        <label>Partner Name : </label>
                      </Box>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        w="300px"
                        marginLeft="10px"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup alignItems="center">
                      <Box w="120px">
                        <label>Partner Email : </label>
                      </Box>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        w="300px"
                        marginLeft="10px"
                        type="email"
                        placeholder="Enter Email Address"
                      />
                    </InputGroup>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="full"
                  >
                    Edit Partner Details
                  </Button>
                </Stack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };