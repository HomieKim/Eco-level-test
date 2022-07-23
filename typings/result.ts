// 결과 유형 4가지에 대한 타입
export type ResultType = {
  lv1: {
    type1: string;
    type2: string;
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv2: {
    type1: string;
    type2: string;
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv3: {
    type1: string;
    type2: string;
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv4: {
    type1: string;
    type2: string;
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
};

type ResultTips = {
  title: string;
  tipsDescription?: string;
  linkList?: Array<{
    linkDescription: string;
    linkUrl: string;
    subTitle?:string;
  }>;
};
