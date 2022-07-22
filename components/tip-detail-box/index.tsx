import React from "react";
import { Circle, TipDetailTitle, TipDetail } from "./tip-detail.style";

const TipDetailBox = () => {
    return (
      <div>
        <Circle/>
        <TipDetailTitle>친환경에 대한 키워드들을 하나씩 알아보기</TipDetailTitle>
        <TipDetail>#제로 웨이스트 #비건 #탄소중립 등 우리 주위엔 환경에 관심을 기울이는 사람들이 생각보다 많이 있답니다.</TipDetail>
      </div>
    );
  }
  
  export default TipDetailBox;