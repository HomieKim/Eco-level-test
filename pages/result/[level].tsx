import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ResultWrapper } from 'styles/result.style';
import { RESULT } from 'utils/constatns';
import { getData } from 'utils/getData';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const query = router.query.level;
  const num = query?.slice(-1);
  const data = getData(query as string);
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
  if (
    router.query.level !== 'lv1' &&
    router.query.level !== 'lv2' &&
    router.query.level !== 'lv3' &&
    router.query.level !== 'lv4'
  )
    return <div>잘못된 접근 입니다.</div>;
  return (
    <ResultWrapper>
      <div style={{color:"#29263b", fontWeight:400}}>당신의 유형은?</div>
      <button onClick={onClick}>카카오톡 공유하기 버튼</button>
      <div></div>
      <button>다시하기 버튼</button>
    </ResultWrapper>
  );
};

export default ResultPage;
