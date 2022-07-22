import styled from 'styled-components';
export const Button = styled.button<{ispick: boolean}>`
width:240px;
height:55px;
border-style:solid;
border-color:#34CA00;
border-width:3px;
border-radius:30px;
${props=>props.ispick?
`background-color:#32CA00;
color:#FFFFFF;
`:
`background-color:rgba(0,0,0,0);
color:#000000;`};
`