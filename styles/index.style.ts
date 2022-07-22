import style from 'styled-components';
const Title = style.div`
font-weight:900;
font-size:24px;
line-height:36px;
width:195px;
height:36px;
position:absolute;
top:132px;
left:142px;
color:#188905;
`
const EarthWrapper = style.div`
  position:absolute;
  top:197px;
  left:168px;
;
`
const TitleManWrapper = style.div`
position:absolute;
top:228px;
left:139px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
font-weight: 500;
font-size: 14px;
line-height: 21px;
`
const TitleImg1Wrapper = style.div`
  position:absolute;
  left:116px;
  top:139px;
`
const TitleImg2Wrapper = style.div`
position:absolute;
left:343px;
top:136px;
`
const SpeBubbleWrapper = style.div`
position:absolute;
left:133px;
top:402px;
`
const BubbleText= style.div`
position:absolute;
left:156px;
top:437px;
width:175px;
height:60px;
font-size:20px;
line-height:30px;
text-align:center;

`

const TitleButtonWrapper = style.div`
position: absolute;
width: 241px;
height: 55px;
left: 120px;
top: 573px;
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

}
`
export {Title, EarthWrapper,TitleManWrapper, TitleButtonWrapper, TitleImg1Wrapper, TitleImg2Wrapper,SpeBubbleWrapper,BubbleText};