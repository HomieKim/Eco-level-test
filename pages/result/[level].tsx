import { NextPage } from 'next';
import { useRouter } from 'next/router';
import TextBox from 'components/text-box'
import TypeBox from 'components/type-box'
import TipBox from 'components/tip-box'
import TipDetailBox from 'components/tip-detail-box';
import { RESULT } from 'utils/constatns';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const ResultData1 = RESULT.lv1.descripton;
  const ResultData2 = RESULT.lv2.descripton;
  const ResultData3 = RESULT.lv3.descripton;
  const ResultData4 = RESULT.lv4.descripton;

  if (router.query.level === "lv1") {
    return (
      <div>
        <TypeBox/>
        <TextBox content={ResultData1}></TextBox>
        <TipBox element={<TipDetailBox/>}/>
        <div>{router.query.level}의 결과 페이지</div>
        <button>카카오톡 공유하기 버튼</button>
        <div></div>
        <button>다시하기 버튼</button>
      </div>
    );
  }
  
  else if (router.query.level === "lv2") {
    return (
      <div>
        <TypeBox/>
        <TextBox content={ResultData2}></TextBox>
        <div>{router.query.level}의 결과 페이지</div>
        <button>카카오톡 공유하기 버튼</button>
        <div></div>
        <button>다시하기 버튼</button>
      </div>
    );
  }

  else if (router.query.level === "lv3") {
    return (
      <div>
        <TypeBox/>
        <TextBox content={ResultData3}></TextBox>
        <div>{router.query.level}의 결과 페이지</div>
        <button>카카오톡 공유하기 버튼</button>
        <div></div>
        <button>다시하기 버튼</button>
      </div>
    );
  }

  else {
    return (
      <div>
        <TypeBox/>
        <TextBox content={ResultData4}></TextBox>
        <div>{router.query.level}의 결과 페이지</div>
        <button>카카오톡 공유하기 버튼</button>
        <div></div>
        <button>다시하기 버튼</button>
      </div>
    );
  }
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
