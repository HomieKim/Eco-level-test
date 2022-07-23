import React from "react";
import { Circle, TipDetailTitle, TipDetail } from "./tip-detail.style";

export interface Props {
  title: string;
  detail?: string;
  linkDescription?: string;
  linkUrl?: string;
}

const TipDetailBox = (props:Props) => {
    return (
      <div>
        <Circle/>
        <TipDetailTitle>{props.title}</TipDetailTitle>
        <TipDetail>{props.detail}</TipDetail>
        <p>{props.linkDescription}</p>
        <p>{props.linkUrl}</p>
      </div>
    );
  }
  
  export default TipDetailBox;