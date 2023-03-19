import { Box, useColorModeValue } from "@chakra-ui/react";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <AllRoutes />
    </Box>
  );
}

export default App;
