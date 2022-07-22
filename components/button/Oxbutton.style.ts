import styled from 'styled-components';
import {Button} from 'components/button/button.style';
export const OxButton = styled.button<{isPick: boolean}>`
width:142px;
height:184px;
border-style:solid;
border-color:#34CA00;
border-width:3px;
border-radius:30px;
margin-right:5px;
${props=>props.isPick?
`background-color:#32CA00;
`:
`background-color:rgba(0,0,0,0);
color:#000000;`
};
`
export const OxImg = styled.span<{isPick: boolean}>`
${props=>props.isPick===true &&
  `filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);`
}
`
// <OxButton isPick={true}><OxImg isPick={true}><Image src="/images/oImg.png" width={95.17} height={95.17}></Image></OxImg></OxButton>
// <OxButton isPick={false}><OxImg isPick={false}><Image src="/images/xImg.png" width={95.17} height={95.17}></Image></OxImg></OxButton>