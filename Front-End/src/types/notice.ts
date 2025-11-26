export type noticeType = {
  _id: number;
  title: string;
  date: Date;
  content: {
    title: string;
    text: string;
  }[];
  author: string;
  image: string;
  category: string;
};
