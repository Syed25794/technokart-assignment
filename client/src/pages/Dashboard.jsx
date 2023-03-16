import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch(
          `https://technokart-backend.onrender.com/super-admin/dashboard?page=${page}&limit=${limit}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        let result = await response.json();
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  },[page,limit]);
  return (
    <Box>
      <ButtonGroup float="right" marginRight="150px" marginBottom="15px">
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          colorScheme="blue"
          isDisabled={page === 10 || data.length < 10}
        >
          Next
        </Button>
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          colorScheme="blue"
          isDisabled={page === 1}
        >
          Previous
        </Button>
      </ButtonGroup>
      <TableContainer
        border="1px solid black"
        w="80%"
        m="auto"
        marginTop="40px"
        borderRadius="10px"
        marginBottom="20px"
      >
        <Table variant="striped">
          <Thead fontSize="30px">
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Age</Th>
              <Th>Email</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((user) => {
              return <TableRow key={user._id} user={user} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
