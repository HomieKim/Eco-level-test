import React from 'react'; 
import {
    YourTypeIs,
    YourLevel,
    YourLevelImg
} from './type-box.style';

const TypeBox = () => {
    return(
        <div>
            <YourTypeIs>당신의 유형은?</YourTypeIs>
            <YourLevel>Lv. 1 아직 환경에 관심 없는 <br/> 사고뭉치 금쪽이</YourLevel>
            <YourLevelImg/>
        </div>
    );
}

export default TypeBox;