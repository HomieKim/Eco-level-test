import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ResultWrapper } from 'styles/result.style';
import { RESULT } from 'utils/constatns';
import { getData } from 'utils/getData';
import TextBox from 'components/text-box';
import TypeBox from 'components/type-box';
import TipBox from 'components/tip-box';
import TipDetailBox from 'components/tip-detail-box';
import { IMAGES } from 'utils/getImage';
import styled from 'styled-components';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const query = router.query.level;
  const num = query?.slice(-1);
  const data = getData(query as string);
  const YourLevelImg = styled.img.attrs({
    src: `http://localhost:3000/images/iconLv${num}.png`
})`
    width: 240px;
    height: 240px;
    display: block;
    margin: 0 auto;
`;
  

  const onClick = () => {
    const { Kakao, location } = window;
    console.log(location.href);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'ECO-Level-Test',
        description: '친구의 환경레벨을 확인해 보세요!',
        imageUrl: `http://localhost:3000/images/iconLv${num}.png`,
        link: {
          webUrl: location.href,
          mobileWebUrl: location.href,
        },
      },
      buttons: [
        {
          title: '결과 보러 가기',
          link: {
            webUrl: location.href,
            mobileWebUrl: location.href,
          },
        },
      ],
    });
  };

  console.log(data.tips);

  const tips = data.tips;
  
  const tipsList: JSX.Element[] = tips.map((tip) => <TipDetailBox key={tip.title} title={tip.title} detail={tip.tipsDescription}></TipDetailBox> )
  
  /* const tipsList: JSX.Element[] = data.useLink? 
  tips.map(tip => tip.linkList?.map(link => <TipDetailBox key={tip.title} title={tip.title} detail={tip.tipsDescription} linkDescription={link.linkDescription} linkUrl={link.linkUrl}></TipDetailBox>) )
  : (tips.map((tip) => <TipDetailBox key={tip.title} title={tip.title} detail={tip.tipsDescription}></TipDetailBox> )) */
  if (
    router.query.level !== 'lv1' &&
    router.query.level !== 'lv2' &&
    router.query.level !== 'lv3' &&
    router.query.level !== 'lv4'
  )
    return <div>잘못된 접근 입니다.</div>;

  return (
    <ResultWrapper>
      <TypeBox type1={data.type1} type2={data.type2} element={<YourLevelImg/>}/>
      <TextBox content={data.descripton}></TextBox>
      <TipBox element = {tipsList} />
      <button onClick={onClick}>카카오톡 공유하기 버튼</button>
      <div></div>
      <button>다시하기 버튼</button>
    </ResultWrapper>
  );
};

export default ResultPage;
