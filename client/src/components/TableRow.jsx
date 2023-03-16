import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const TableRow = ({ user, deletePartner ,editParnerDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const EditModal = ({ isOpen, onClose, userDetails, editPartnerDetails }) => {
    const [name,setName]=useState(userDetails.partner_name);
    const [email,setEmail]=useState(userDetails.partner_email);
    const [isLoading,setIsLoading]=useState(false);
    // const [isEdited,setIsEdited]=useState();

    const editPartnerDetailS=()=>{
      const payload = {
        partner_email:userDetails.partner_email,
        newName:name,
        newEmail:email
      };
      console.log(payload);
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
                    onClick={editPartnerDetailS}
                  >
                    {isLoading ? <Spinner /> : null}
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
  return (
    <Tr>
      <EditModal isOpen={isOpen} onClose={onClose} userDetails={user} editPartnerDetails={editParnerDetails} />
      <Td>{user.partner_name}</Td>
      <Td>{user.partner_email}</Td>
      <Td>{user.login_link}</Td>
      <Td>
        <Button onClick={onOpen}>Edit</Button>
      </Td>
      <Td>
        <Button onClick={() => deletePartner(user)}>Delete</Button>
      </Td>
    </Tr>
  );
};

export default TableRow;
