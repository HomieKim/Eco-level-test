import React from 'react'; 
import {
    YourTypeIs,
    YourLevel1,
    YourLevel2,
} from './type-box.style';

export interface Props {
    type1: string;
    type2: string;
    element: JSX.Element;
  }

const TypeBox = (props:Props) => {
    return(
        <div>
            <YourTypeIs>당신의 유형은?</YourTypeIs>
            <YourLevel1>{props.type1}</YourLevel1>
            <br/>
            <YourLevel2>{props.type2}</YourLevel2>
            {props.element}
        </div>
    );
}

export default TypeBox;