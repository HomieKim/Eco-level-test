import React from 'react';
import {
  AboutmeDescriptionWrapper,
  AboutmeDescriptionImg,
  AboutmeTitle,
  AboutmeDescriptionContent,
  AboutmeTop,
} from './text-box.style';

const TextBox = () => {
  return (
    <AboutmeDescriptionWrapper>
      <AboutmeTop>
        <AboutmeDescriptionImg />
        <AboutmeTitle>나는 이런 사람이에요!</AboutmeTitle>
      </AboutmeTop>
      <AboutmeDescriptionContent>
        당신은 아직 환경보호의 중요성을 깨닫지 못했군요! 금쪽같은 내 새끼지만 어딜 가든 항상 사고만 치는 천진난만 아이
        같은 유형입니다. 환경보호에 관심없는 것은 잘못이 아닙니다, 그치만 나와 미래의 나의 자식에게 깨끗한 지구를
        물려주는 게 좋겠죠? 어렵게 생각하지 마세요, 환경 보호에 대해 관심을 가지는 것 부터 시작해보세요! 환경 보호를
        위해 일상 속 작은 것 부터 하나씩 실천하면 좋을 것들을 알려드릴게요.
      </AboutmeDescriptionContent>
    </AboutmeDescriptionWrapper>
  );
};

export default TextBox;
