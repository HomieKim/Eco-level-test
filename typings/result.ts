// 결과 유형 4가지에 대한 타입
export type ResultType = {
  lv1: {
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv2: {
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv3: {
    descripton: string;
    tips: Array<ResultTips>;
    useLink: boolean;
  };
  lv4: {
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
