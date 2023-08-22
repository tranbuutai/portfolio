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

export type ExperienceType = {
  name: string;
  title: string;
  image: string;
  time: string;
};
