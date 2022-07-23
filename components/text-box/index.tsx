import React from 'react';
import {
  AboutmeDescriptionWrapper,
  AboutmeDescriptionImg,
  AboutmeTitle,
  AboutmeDescriptionContent,
  AboutmeTop,
} from './text-box.style';

export interface Props {
  content: String;
}

const TextBox = (props:Props) => {
  return (
    <AboutmeDescriptionWrapper>
      <AboutmeTop>
        <AboutmeDescriptionImg />
        <AboutmeTitle>나는 이런 사람이에요!</AboutmeTitle>
      </AboutmeTop>
      <AboutmeDescriptionContent>
        {props.content}
      </AboutmeDescriptionContent>
    </AboutmeDescriptionWrapper>
  );
}

export default TextBox;
