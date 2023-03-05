import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'body, html': {
        bg: '#f8f8f8',
      },
    },
  },
});

export default theme;
