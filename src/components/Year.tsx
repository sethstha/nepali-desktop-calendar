import React from "react";
import data from "../data/2079.json";
import Month from "./Month";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import NepaliDate from "nepali-date-converter";

const Year = () => {
  const year: Year = data;

  const date = new Date();
  const currentDate = NepaliDate.fromAD(date).getDateObject();

  console.log(currentDate);
  return (
    <Box
      sx={{
        ".swiper": {
          w: "full",
          h: "full",
        },
      }}
    >
      <SimpleGrid columns={7}>
        <Center border="1px" borderColor="gray.100">
          आईतबार
        </Center>
        <Center border="1px" borderColor="gray.100">
          सोमवार
        </Center>
        <Center border="1px" borderColor="gray.100">
          मङ्गलवार
        </Center>
        <Center border="1px" borderColor="gray.100">
          बुधवार
        </Center>
        <Center border="1px" borderColor="gray.100">
          बिहिवार
        </Center>
        <Center border="1px" borderColor="gray.100">
          शुक्रवार
        </Center>
        <Center border="1px" borderColor="gray.100">
          शनिवार
        </Center>
      </SimpleGrid>
      <Swiper modules={[Navigation, A11y]} navigation>
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
