import { ChakraProvider } from '@chakra-ui/react';
import Year from './components/Year';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Year />
    </ChakraProvider>
  );
}

export default App;
