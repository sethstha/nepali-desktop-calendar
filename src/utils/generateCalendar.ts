import axios from "axios";
import { load } from "cheerio";

export const fetchCalendar = () => {
  const calendar: any = [];

  for (let i = 1; i < 13; i++) {
    axios.get(`https://www.hamropatro.com/calendar/2079/${i}`).then((res) => {
      const $ = load(res.data, {
        xml: {
          withStartIndices: true,
        },
      });
      const main = `.home-calendar-wrapper`;
      const month = `${main} select#selectMonth`;
      const engMonth = `li.marginCalender`;
      calendar[i - 1] = {
        month: i - 1,
        engMonth: $(engMonth).children("span").eq(1).text().replace("\n", ""),
        name: $(month).find(":selected").text(),
        days: [],
      };
      const days = $(`${main} ul.dates li`);

      days.each((index, day) => {
        calendar[i - 1].days.push({
          nep: $(day).children(".nep").first().text(),
          eng: parseInt($(day).children(".eng").first().text()),
          tithi: $(day).children(".tithi").first().text(),
          event: $(day).children(".event").first().text(),
          disable: $(day).hasClass("disable") ? true : false,
          holiday: $(day).hasClass("holiday") ? true : false,
        });
      });
    });
  }

  setTimeout(() => {
    console.log(calendar);
  }, 1000);
};
