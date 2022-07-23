// 질문에 대한 타임 질문 내용이랑 질문 선택지 선택 지에 따른 점수 등등 ..
export type QeustionType =  {
  title:string;
  selectType: "list" | "ox";
  // selcetType이 list일때만  selectList가 있음
  selectList?:Array<ItemType>;
}

export type ItemType = {
  score?:number;
  content:string;
}