import styled from 'styled-components';
// import style from 'styled-components';
// const SurveyEarthWrapper = style.div`
// position: absolute;
// left: 218px;
// top: 169px;
// `
// const SurveyNumber = style.div`
//   position: absolute;
//   width: 13px;
//   height: 30px;
//   left: 250px;
//   top: 165px;
//   font-weight: 900;
//   font-size: 20px;
//   line-height: 30px;
//   color: #188905;
// `
// const Surveytitle = style.div`
// position: absolute;
// width: 225px;
// height: 72px;
// left: 131px;
// top: 232px;
// font-weight: 500;
// font-size: 16px;
// line-height: 24px;
// color: #000000;
// `
// const SelectButtonWrapper = style.div`
// `
// const SelectText = style.p`
// font-weight: 500;
// font-size: 14px;
// line-height: 21px;
// `
// export {SurveyEarthWrapper,SurveyNumber,Surveytitle,SelectButtonWrapper,SelectText};

export const SurverWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  & h1{
    display:flex;
    align-items:center;
    & span{
      font-size:20px;
      font-weight:800;
      color: #188905;
      margin-left:6px;
    }
  }
`

export const NowNumber = styled.div`
  font-size:12px;
  font-weight:400;
  color:#8f8f8f;
  margin: 8px 0px 12px 0px;
`

export const QuestionTitle = styled.div`
  width:220px;
  color:black;
  min-height:66px;
  max-height:80px;
  font-weight:500;
  margin-bottom:72px;
`

