interface IAdvantage {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: string;
  iconError: boolean;
  isSaved: boolean;
};

export type TAdvantagesArray = IAdvantage[];