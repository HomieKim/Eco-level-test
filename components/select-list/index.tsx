import CustomButton from 'components/button';
import React, { Dispatch, SetStateAction } from 'react';
import { ItemType } from 'typings/question';
import { Wrapper } from './select.style';
interface Props {
  itemData: Array<ItemType>;
  setNow: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
}
const SelectList = ({ itemData, setNow , setScore}: Props) => {
  console.log(itemData);
  const handler = (score:number) => {
    setNow((prev) => prev + 1);
    setScore((prev) => prev+score);
  };
  return (
    <Wrapper>
      {itemData.map((v, i) => (
        <div key={i} onClick={()=> handler(v.score!)} className={v.score?.toString()}>
          
          <CustomButton >{v.content}</CustomButton>
        </div>
      ))}
    </Wrapper>
  );
};

export default SelectList;
