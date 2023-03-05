import { Button, Center, ChakraProvider } from "@chakra-ui/react";
import Year from "./components/Year";

function App() {
  return (
    <ChakraProvider>
      <Year />
    </ChakraProvider>
  );
}

export default App;
