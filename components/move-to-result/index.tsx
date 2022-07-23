import CustomButton from 'components/button';
import { LoadingWrapper } from 'components/loading/loading.style';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title, TitleImg1Wrapper, TitleImg2Wrapper } from 'styles/index.style';

const MoveToResult = ({ nowScore }: { nowScore: number }) => {
  let myLevel;
  if (nowScore >= 108) {
    myLevel = 'lv4';
  } else if (nowScore >= 73) {
    myLevel = 'lv3';
  } else if (nowScore >= 37) {
    myLevel = 'lv2';
  } else {
    myLevel = 'lv1';
  }

  return (
    <LoadingWrapper>
      <TitleImg1Wrapper style={{ left: 106 }}>
        <Image src="/images/titleImg1.png" width={22} height={21.12}></Image>
      </TitleImg1Wrapper>
      <Title style={{ fontSize: 20, width: 250 }}>테스트가 완료되었습니다.</Title>
      <TitleImg2Wrapper style={{ left: 370 }}>
        <Image src="/images/titleImg2.png" width={22} height={23.64}></Image>
      </TitleImg2Wrapper>
      <Link href={`result/${myLevel}`}>
        <a>
          <CustomButton>결과 보러가기</CustomButton>
        </a>
      </Link>
    </LoadingWrapper>
  );
};

export default MoveToResult;
