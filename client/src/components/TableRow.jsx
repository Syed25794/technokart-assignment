import {Button,Td,Tr,useDisclosure,} from "@chakra-ui/react";
import { EditModal } from "./EditModal";

const TableRow = ({ user, deletePartner ,editParnerDetails, index , page }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tr>
      <EditModal isOpen={isOpen} onClose={onClose} userDetails={user} editPartnerDetails={editParnerDetails} />
      <Td textAlign="center">{page*10+index+1}</Td>
      <Td textAlign="center">{user.partner_name}</Td>
      <Td textAlign="center">{user.partner_email}</Td>
      <Td textAlign="center">{user.login_link}</Td>
      <Td textAlign="center">
        <Button onClick={onOpen} colorScheme="yellow">Edit</Button>
      </Td>
      <Td textAlign="center">
        <Button onClick={() => deletePartner(user)} colorScheme="red">Delete</Button>
      </Td>
    </Tr>
  );
};

export default TableRow;
