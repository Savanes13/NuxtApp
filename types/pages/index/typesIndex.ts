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

interface SlideImage {
  id: number;
  catalog: string;
  name: string;
  isDeleted: boolean;
}

interface ISlide {
  id: number;
  name: string;
  sort: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
  image: SlideImage[];
  isSaved: boolean;
  deleted: boolean;
}

export type TSlidesArray = ISlide[];