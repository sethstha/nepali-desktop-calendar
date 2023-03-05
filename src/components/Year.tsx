import { Stack } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Calendar from './Calendar';
import Sidebar from './Sidebar';

const Year = () => {
  return (
    <Stack direction="row" spacing="0" h="100vh" overflow="hidden">
      <Sidebar />
      <Calendar />
    </Stack>
  );
};

export default Year;
