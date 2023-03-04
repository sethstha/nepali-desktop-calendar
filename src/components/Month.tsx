import { SimpleGrid } from "@chakra-ui/react";
import { IAdBs } from "nepali-date-converter/dist/types/nepali-date-helper";
import React from "react";
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
    <SimpleGrid columns={7} w={"100vw"} h={"100vh"}>
      {data?.days?.map((day, index: number) => (
        <Day
          key={index}
          data={day}
          currentDate={currentDate}
          isCurrentMonth={isCurrentMonth}
        />
      ))}
    </SimpleGrid>
  );
};

export default Month;
