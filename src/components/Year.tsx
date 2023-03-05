import { Box } from '@chakra-ui/react';
import NepaliDate from 'nepali-date-converter';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data/2079.json';
import Month from './Month';

const Year = () => {
  const year: Year = data;

  const date = new Date();
  const currentDate = NepaliDate.fromAD(date).getDateObject();

  console.log(currentDate);
  return (
    <Box
      sx={{
        '.swiper': {
          w: 'full',
          h: 'full',
        },

        '.swiper-slide': {
          w: 'full',
        },
      }}>
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

export default Year;
