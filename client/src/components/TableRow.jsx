import { Image, Td, Tr } from "@chakra-ui/react";

const TableRow = ({ user }) => {
  return (
    <Tr>
      <Td>
        <Image src={user.picture.medium} alt={user.name.first} />
      </Td>
      <Td>{`${user.name.first} ${user.name.last}`}</Td>
      <Td>{user.gender}</Td>
      <Td>{user.dob.age}</Td>
      <Td>{user.email}</Td>
      <Td>{user.location.country}</Td>
    </Tr>
  );
};

export default TableRow;