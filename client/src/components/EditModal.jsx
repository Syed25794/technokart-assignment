import { FormControl,Input,InputGroup,Modal,Box,Button,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay,Stack} from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { editPartnerDetails } from '../redux/action';


export const EditModal = ({ isOpen, onClose, userDetails }) => {
    const [newName,setNewName]=useState(userDetails.partner_name);
    const [newEmail,setNewEmail]=useState(userDetails.partner_email);
    const dispatch = useDispatch();

    const handleEdit=(e)=>{
      const payload = {
        partner_email:userDetails.partner_email,
        newName,
        newEmail,
        login_link:""
      };
      dispatch(editPartnerDetails(payload));
      setNewName("");
      setNewEmail("");
    }

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Partner Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" w="450px">
                  <FormControl>
                    <InputGroup alignItems="center">
                      <Box w="120px">
                        <label>Partner Name : </label>
                      </Box>
                      <Input onChange={(e) => setNewName(e.target.value)} value={newName} w="300px" marginLeft="10px" type="text" placeholder="Enter Name"/>
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup alignItems="center">
                      <Box w="120px">
                        <label>Partner Email : </label>
                      </Box>
                      <Input onChange={(e) => setNewEmail(e.target.value)} value={newEmail} w="300px" marginLeft="10px" type="email" placeholder="Enter Email Address"  />
                    </InputGroup>
                  </FormControl>
                  <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full" onClick={(e)=>handleEdit(e)}>
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