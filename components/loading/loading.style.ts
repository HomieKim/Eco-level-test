import  styled, {keyframes}  from 'styled-components';
const spin = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;
export const LoadingWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:20px;

  & img{
    animation: ${spin} 6s linear infinite;
    transform-origin: 50% 50%;
  }

`

