import React from 'react'; 
import { TipWrapper, TipTop, TipImg, TipTitleFirst, TipTitleSecond } from './tip-box.style';

export interface Props {
    element: JSX.Element[];
  }

const TipBox = (props:Props) => {
    return (
      <TipWrapper>
        <TipTop>
            <TipImg/>
            <TipTitleFirst>당신에게 알려주고픈</TipTitleFirst>
            <TipTitleSecond>일상 꿀팁</TipTitleSecond>
        </TipTop>
        {props.element}
      </TipWrapper>
    );
  }
  
  export default TipBox;
