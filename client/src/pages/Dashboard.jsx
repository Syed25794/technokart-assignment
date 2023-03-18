import {Box,Button,ButtonGroup,Table,TableContainer,Tbody,Text,Th,Thead,Tr,useDisclosure,} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPartnerModal } from "../components/AddPartnerModal";
import TableRow from "../components/TableRow";
import { deletePartner, getPartners } from "../redux/action";



export const Dashboard = () => {
  const { partners } =useSelector((store)=> store );
  const [page, setPage] = useState(1);
  const limit = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  

  useEffect(() => {
    const payload={page,limit};
    dispatch(getPartners(payload));
  }, [page,limit,dispatch]);


  

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

  const handleAdd=async(payload)=>{
    console.log(payload);
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

  const handleDelete=(userDetails)=>{
    dispatch(deletePartner(userDetails.partner_email))
  }


  return (
    <Box>
      <Button onClick={onOpen} margin="20px" colorScheme="pink">Add Partners</Button>
      <AddPartnerModal isOpen={isOpen} onClose={onClose} addPartners={handleAdd} />
      <ButtonGroup float="right" marginRight="150px" marginBottom="15px" marginTop="20px" >
        <Button colorScheme="purple" onClick={() => {setPage((prev) => prev + 1);}} isDisabled={page === 10 || partners.length < 10}>
          Next
        </Button>
        <Text fontSize="18px" fontWeight="semibold" color="red" marginTop="5px">{page}</Text>
        <Button colorScheme="purple" onClick={() => {setPage((prev) => prev - 1); }} isDisabled={page === 1}>
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
            <Tr textAlign="center">
              <Th textAlign="center">Serial</Th>
              <Th textAlign="center">Partner Name</Th>
              <Th textAlign="center">Email</Th>
              <Th textAlign="center">Login Link</Th>
              <Th textAlign="center">Edit</Th>
              <Th textAlign="center">Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {partners?.map((user,index) => {
              return (
                <TableRow key={user._id} user={user} deletePartner={handleDelete} editPartnerDetails={editPartnerDetails} index={index} page={page-1}/>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
