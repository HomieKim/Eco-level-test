import type { NextPage } from 'next';
import Link from 'next/link'
import Image from 'next/image';
import {useState} from "react";
import { QUESTIONS, RESULT } from 'utils/constatns';
import { IMAGES } from 'utils/getImage';
import {Button} from 'components/button/button.style'
import {Title, EarthWrapper,TitleManWrapper, TitleButtonWrapper, TitleImg1Wrapper, TitleImg2Wrapper, SpeBubbleWrapper,BubbleText} from 'styles/index.style'
const Main: NextPage = () => {
  const questionData = QUESTIONS;
  const ResultData=RESULT;
  console.log("qeustion data : ",questionData);
  console.log("result data : ",ResultData);
  return <div>
    <TitleImg1Wrapper>
      <Image src='/images/titleImg1.png' width={22} height={21.12}></Image>
    </TitleImg1Wrapper>
    <Title>ECO LEVEL TEST</Title>
    <TitleImg2Wrapper>
    <Image src='/images/titleImg2.png' width={22} height={23.64}></Image>
    </TitleImg2Wrapper>
    {/* <Image src={IMAGES.LV1} width={100} height={100} alt='result'/>
    <div style={{width:"200px", height:"200px", position:'relative'}}>
      <Image src={IMAGES.LV2} layout="fill" alt='result'/> */}
      <EarthWrapper>
        <Image src='/images/earth.png' width={145} height={145}></Image>
      </EarthWrapper>
      <TitleManWrapper>
        <Image src='/images/titleMan.png' width={174} height={174}></Image>
      </TitleManWrapper>
      <SpeBubbleWrapper>
        <Image src='/images/speBubble.png' width={218} height={114}></Image>
      </SpeBubbleWrapper>
      <BubbleText>
        나의 <b>환경사랑레벨</b>은 얼마나 될까?
      </BubbleText>
      <Link href="/survey">
      <TitleButtonWrapper>
        <Button isPick={false}>
          <p>지금 TEST하러 가기</p>
        </Button>
        </TitleButtonWrapper>
      </Link>
      
  </div>;
};

export default Main;
