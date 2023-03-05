import { englishToNepaliNumber } from 'nepali-number';

export const bsDays = [
  'आईतबार',
  'सोमवार',
  'मङ्गलवार',
  'बुधवार',
  'बिहिवार',
  'शुक्रवार',
  'शनिवार',
];

export const bsMonths = [
  'वैशाख',
  'जेठ',
  'असार',
  'साउन',
  'भदौ',
  'असोज',
  'कार्तिक',
  'मंसिर',
  'पुष',
  'माघ',
  'फागुन',
  'चैत',
];

export const getNepaliMonth = (month: number) => {
  if (month > 11) {
    throw new Error('Month must be from 0 to 11');
  }
  return bsMonths[month];
};

export const getNepaliDay = (day: number) => {
  if (day > 6) {
    throw new Error('Day must be from 0 to 6');
  }
  return bsDays[day];
};

export const getNepaliDate = (bsDate: DayMonthYear) => {
  const date = new Date();
  const systemDay = date.getDay();
  const day = getNepaliDay(systemDay);
  const month = getNepaliMonth(bsDate.month);

  return `${day} ${englishToNepaliNumber(
    bsDate.date
  )}, ${month} ${englishToNepaliNumber(bsDate.year)}`;
};
