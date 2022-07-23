import MoveToResult from 'components/move-to-result';
import SeelctOX from 'components/ox';
import SelectList from 'components/select-list';
import { NextPage } from 'next';
import Image from 'next/image';

import {  useState } from 'react';
import { NowNumber, QuestionTitle, SurverWrapper } from 'styles/survey.style';
import { QUESTIONS } from 'utils/constatns';
import { IMAGES } from 'utils/getImage';

const SurVeyPage: NextPage = () => {
  const [nowQuestion, setNowQuestion] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [myScore, setMyScore] = useState(0);

  console.log(myScore);
  const QuestionData = QUESTIONS[nowQuestion];

  if(nowQuestion === 12) {
    return (
      <MoveToResult nowScore={myScore}/>
    )
  }
  return (
    <SurverWrapper>
      <h1>
        <Image src={IMAGES.EARTH} alt="earth" width={23} height={23} />
        <span>{nowQuestion + 1}</span>
      </h1>
      <NowNumber>{nowQuestion + 1}/12</NowNumber>
      <QuestionTitle>{QuestionData.title}</QuestionTitle>
      {QuestionData.selectType === 'list' ? (
        <SelectList itemData={QuestionData.selectList!} setNow={setNowQuestion} setScore={setMyScore}/>
      ) : (
        <SeelctOX setNow={setNowQuestion} setScore={setMyScore}/>
      )}
    </SurverWrapper>
  );
};

export default SurVeyPage;
