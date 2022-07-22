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
};

export default ResultPage;
