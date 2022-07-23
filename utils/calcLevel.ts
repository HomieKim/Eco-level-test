// 결과 에 따라 점수를 계산해서 유형을 리턴
export function returnLevel() {
    const score = 0;
    //const { score } = SCORE; 받아오는 거라면 이런 느낌으로
    if ((0 <= score) && (score <= 36)) {
        return 1;
    }
    else if ((score < 30) && (score <= 72)) {
        return 2;
    }
    else if ((score < 73) && (score <= 108)) {
        return 3;
    }
    else {
        return 4;
    }
}