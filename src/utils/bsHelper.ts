import { IYearMonthDate } from "nepali-date-converter/dist/types/nepali-date-helper";
import { englishToNepaliNumber } from "nepali-number";

export const getNepaliMonth = (month: number) => {
  if (month > 11) {
    throw new Error("Month must be from 0 to 11");
  }
  switch (month) {
    case 0:
      return "वैशाख";
    case 1:
      return "जेठ";
    case 2:
      return "असार";
    case 3:
      return "साउन";
    case 4:
      return "भदौ";
    case 5:
      return "असोज";
    case 6:
      return "कार्तिक";
    case 7:
      return "मंसिर";
    case 8:
      return "पुष";
    case 9:
      return "माघ";
    case 10:
      return "फागुन";
    case 11:
      return "चैत";
  }
};

export const getNepaliDay = (day?: number) => {
  if (!day || day > 6) {
    throw new Error("Day must be from 0 to 6");
  }

  switch (day) {
    case 0:
      return "आईतबार";
    case 1:
      return "सोमवार";
    case 2:
      return "मङ्गलवार";
    case 3:
      return "बुधवार";
    case 4:
      return "बिहिवार";
    case 5:
      return "शुक्रवार";
    case 6:
      return "शनिवार";
  }
};

export const getNepaliDate = (bsDate: IYearMonthDate) => {
  const day = getNepaliDay(bsDate?.day);
  const month = getNepaliMonth(bsDate.month);

  return `${day} ${englishToNepaliNumber(
    bsDate.date
  )}, ${month} ${englishToNepaliNumber(bsDate.year)}`;
};
