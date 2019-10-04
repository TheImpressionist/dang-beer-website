

export interface IMeta {
  name: string;
  content: string;
}



export interface ISEOProps {
  description: string;
  lang: string;
  title: string;
  meta: Array<IMeta>;
}
