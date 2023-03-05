import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { IAdBs } from "nepali-date-converter/dist/types/nepali-date-helper";
import { englishToNepaliNumber } from "nepali-number";
import React from "react";
import { bsDays } from "../utils/bsHelper";
import Day from "./Day";

type Props = {
  data: Month;
  currentDate: IAdBs;
};

const Month: React.FC<Props> = (props) => {
  const { data, currentDate } = props;
  const isCurrentMonth = currentDate.BS.month === data.month || false;

  if (isCurrentMonth) {
    console.log("current month is ", data.name);
  }
  return (
    <Box>
      <Flex justify="space-between" px="4">
        <Heading>
          {data.name} {englishToNepaliNumber(currentDate.BS.year)}
        </Heading>
        <Heading>{data.engMonth}</Heading>
      </Flex>

      <SimpleGrid columns={7}>
        {bsDays.map((day, i) => (
          <Center>{day}</Center>
        ))}
        {data?.days?.map((day, index: number) => (
          <Day
            key={index}
            data={day}
            currentDate={currentDate}
            isCurrentMonth={isCurrentMonth}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Month;
