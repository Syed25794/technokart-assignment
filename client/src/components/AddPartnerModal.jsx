import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, Stack , Input, InputGroup, FormControl, Box, ModalCloseButton, Button, ModalHeader} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { addPartner } from "../redux/action";

export const AddPartnerModal = ({ onClose, isOpen }) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const dispatch = useDispatch();

    const handleAdd=(e)=>{
      e.preventDefault();
      if( name !== "" && email !== "" ){
        const payload = { partner_email:email,partner_name:name};
        dispatch(addPartner(payload));
        setName("");
        setEmail("");
        setTimeout(()=>{
          onClose();
        },500)
      }
    }

    return (
      <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Partner Details</ModalHeader>
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
                  onClick={(e)=>handleAdd(e)}
                >
                  Add Partner
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    );
  };