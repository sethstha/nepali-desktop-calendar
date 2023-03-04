import { Button, Center, ChakraProvider } from "@chakra-ui/react";
import Year from "./components/Year";
import { fetchCalendar } from "./utils/generateCalendar";

function App() {
  return (
    <ChakraProvider>
      <Button onClick={() => fetchCalendar()}>Genaterat</Button>
      <Year />
    </ChakraProvider>
  );
}

export default App;
