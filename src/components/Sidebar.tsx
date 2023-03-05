import { Box, List, ListItem } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box w="200px" bg={'white'} pos="sticky" top="0" left="0" bottom="0">
      <List>
        <ListItem>Calendar</ListItem>
        <ListItem>Upcoming Events</ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
