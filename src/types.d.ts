type Year = Month[];

type Month = {
  month: number;
  engMonth: string;
  name: string;
  days: Day[];
};

type Day = {
  nep: string;
  eng: number;
  tithi: string;
  event: string;
  disable: boolean;
  holiday: boolean;
};

type CurrentDate = {
  BS: IAdBs;
  AD: IAdBs;
};
