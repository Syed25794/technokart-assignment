import {Box,Button,ButtonGroup,Table,TableContainer,Tbody,Th,Thead,Tr,useDisclosure,} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { AddPartnerModal } from "../components/AddPartnerModal";
import TableRow from "../components/TableRow";



export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getPartners = useCallback((async function getData() {
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
  }),[page,limit]);

  useEffect(() => {
    getPartners();
  }, [getPartners]);


  const deletePartner = async (user) => {
    try {
      const payload = {
        partner_email: user.partner_email,
      };
      console.log(payload);
      let response = await fetch(
        "https://technokart-backend.onrender.com/super-admin/deletePartner",
        {
          method: "DELETE",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      let result = await response.json();
      console.log(result);
      getPartners();
    } catch (error) {
      console.log(error);
    }
  };

  const editPartnerDetails=async(user)=>{
    console.log(user)
    try {
      const payload = {
        partner_email: user.partner_email,
      };
      console.log(payload);
      let response = await fetch(
        "https://technokart-backend.onrender.com/super-admin/deletePartner",
        {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      let result = await response.json();
      console.log(result);
      getPartners();
    } catch (error) {
      console.log(error);
    }
  }

  const addPartners=async(payload)=>{
    try {
      let response = await fetch("https://technokart-backend.onrender.com/super-admin/addPartner",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{"Content-Type":"application/json"}
      });
      let result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Box>
      <Button onClick={onOpen}>Add Partners</Button>
      <AddPartnerModal isOpen={isOpen} onClose={onClose} addPartners={addPartners} />
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
        <Table variant="simple">
          <Thead fontSize="30px">
            <Tr>
              <Th>Partner Name</Th>
              <Th>Email</Th>
              <Th>Login Link</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((user) => {
              return (
                <TableRow
                  key={user._id}
                  user={user}
                  deletePartner={deletePartner}
                  editPartnerDetails={editPartnerDetails}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};