import { Button, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deletePartner } from "../redux/action";
import { EditModal } from "./EditModal";

const TableRow = ({ user, editParnerDetails, index, page }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleDelete = (userDetails) => {
    dispatch(deletePartner(userDetails.partner_email));
  };

  return (
    <>
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        userDetails={user}
        editPartnerDetails={editParnerDetails}
      />
      <Tr>
        <Td textAlign="center">{page * 10 + index + 1}</Td>
        <Td textAlign="center">{user.partner_name}</Td>
        <Td textAlign="center">{user.partner_email}</Td>
        <Td textAlign="center">{user.login_link}</Td>
        <Td textAlign="center">
          <Button onClick={onOpen} colorScheme="yellow">
            Edit
          </Button>
        </Td>
        <Td textAlign="center">
          <Button onClick={() => handleDelete(user)} colorScheme="red">
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default TableRow;
