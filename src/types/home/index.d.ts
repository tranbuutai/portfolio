export type ProjectType = {
  detail: detailProjectType;
};
export type DetailProjectType = {
  title: string;
  description: string;
  image: string;
  anotherImage?: string;
  techStack?: string;
  link: any;
};
