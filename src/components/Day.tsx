import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { invoke } from "@tauri-apps/api";
import { IAdBs } from "nepali-date-converter/dist/types/nepali-date-helper";
import React from "react";
import { getNepaliDate } from "../utils/bsHelper";

type Props = {
  data: Day;
  currentDate: IAdBs;
  isCurrentMonth: boolean;
};

const Day: React.FC<Props> = (props) => {
  const { data, currentDate, isCurrentMonth } = props;
  const isCurrentDay =
    (isCurrentMonth && currentDate.AD.date === data.eng) || false;

  if (isCurrentDay) {
    invoke("set_menu_item", {
      title: getNepaliDate(currentDate.BS),
    });
  }
  return (
    <Center
      border="1px"
      borderColor="gray.200"
      pos="relative"
      bg={isCurrentDay ? "blue.100" : "transparent"}
      color={data.holiday ? "red" : data.disable ? "gray.300" : "gray.500"}
    >
      <Heading>{data?.nep}</Heading>
      <Stack
        direction="column"
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
        px="4"
        pb="2"
        spacing="0"
        fontSize={"xs"}
      >
        <Text>{data?.eng}</Text>
        <Text>{data?.event}</Text>
        <Text>{data?.tithi}</Text>
      </Stack>
    </Center>
  );
};

export default Day;
