import styled from 'styled-components';
export const Button = styled.button<{isPick?: boolean}>`
width:240px;
height:55px;
border-style:solid;
border-color:#34CA00;
border-width:3px;
border-radius:30px;
${props=>props.isPick?
`background-color:#32CA00;
color:#FFFFFF;
`:
`background-color:rgba(0,0,0,0);
color:#000000;`};
&:hover{
  color:white;
  background-color:#32CA00;
}
`
export const ButtonWrapper = styled.button`
  border: 3px solid #34CA00;
  width:240px;
  height:55px;
  padding:8px 24px;
  background-color:transparent;
  border-radius:30px;
`;
