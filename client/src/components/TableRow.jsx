import {Button,Td,Tr,useDisclosure,} from "@chakra-ui/react";
import { EditModal } from "./EditModal";

const TableRow = ({ user, deletePartner ,editParnerDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
