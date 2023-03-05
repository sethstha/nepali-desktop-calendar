import { Box } from '@chakra-ui/react';
import NepaliDate from 'nepali-date-converter';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data/2079.json';
import Month from './Month';

const Calendar = () => {
  const year: Year = data;

  const date = new Date();
  const currentDate = NepaliDate.fromAD(date).getDateObject();

  return (
    <Box w="calc(100vw - 200px)" overflowY={'auto'}>
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        initialSlide={currentDate?.BS?.month}
        spaceBetween={0}>
        {year?.map((month, index) => (
          <SwiperSlide key={index}>
            <Month data={month} currentDate={currentDate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Calendar;
