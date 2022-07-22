import type { NextPage } from 'next';
import Image from 'next/image';
import { QUESTIONS, RESULT } from 'utils/constatns';
import { IMAGES } from 'utils/getImage';

const Main: NextPage = () => {
  const questionData = QUESTIONS;
  const ResultData=RESULT;
  console.log("qeustion data : ",questionData);
  console.log("result data : ",ResultData);
  return <div>테스트 시작하기
    <Image src={IMAGES.LV1} width={100} height={100} alt='result'/>
    <div style={{width:"200px", height:"200px", position:'relative'}}>
      <Image src={IMAGES.LV2} layout="fill" alt='result'/>
    </div>
  </div>;
};

export default Main;
