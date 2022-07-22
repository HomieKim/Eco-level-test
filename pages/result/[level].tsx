import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ResultPage: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div>{router.query.level}의 결과 페이지</div>
      <button>카카오톡 공유하기 버튼</button>
      <div></div>
      <button>다시하기 버튼</button>
    </div>
  );
};

export default ResultPage;
