import { ReactNode } from 'react';
import {  ButtonWrapper } from './button.style';


const CustomButton = ({children,radius}:{children:ReactNode,radius?:number}) => {
  return (
    <ButtonWrapper>{children}</ButtonWrapper>
  )
};

export default CustomButton;
