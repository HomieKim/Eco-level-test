import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const num = router.query.level?.slice(-1);
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
  return (
    <div>
      <div>{router.query.level}의 결과 페이지</div>
      <button onClick={onClick}>카카오톡 공유하기 버튼</button>
      <div></div>
      <button>다시하기 버튼</button>
    </div>
  );
};

export default ResultPage;
