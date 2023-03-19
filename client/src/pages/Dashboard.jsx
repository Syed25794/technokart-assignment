import {Alert, AlertIcon, Box,Button,ButtonGroup,Table,TableContainer,Tbody,Text,Th,Thead,Tr,useColorModeValue,useDisclosure,} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPartnerModal } from "../components/AddPartnerModal";
import TableRow from "../components/TableRow";
import { getPartners } from "../redux/action";



export const Dashboard = () => {
  const { partners ,isCreated, isLoading } =useSelector((store)=> store );
  console.log(isCreated);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const loadData = useCallback(()=>{
    const payload={page,limit};
    dispatch(getPartners(payload));
  },[page,limit,dispatch])

  useEffect(() => {
    loadData();
  }, [loadData]);


  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      {isLoading ? (<Alert status='info' w="400px" m="auto" marginTop="10px" >
        <AlertIcon />Loading Partner Details
        </Alert>) : null 
      }
      <Button onClick={onOpen} margin="20px" colorScheme="pink">Add Partners</Button>
      <AddPartnerModal isOpen={isOpen} onClose={onClose}/>
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
                <TableRow key={user._id} user={user} index={index} page={page-1}/>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
