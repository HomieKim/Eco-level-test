import { OxButton, OxImg, Wrapper } from 'components/button/Oxbutton.style';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
interface Props {
  setNow: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
}
const SeelctOX = ({ setNow, setScore }: Props) => {
  const Ohandler = () => {
    setNow((prev) => prev + 1);
    setScore((prev) => prev+6);
  };
  const Xhandler = () => {
    setNow((prev) => prev + 1);
  };
  return (
    <Wrapper>
      <OxButton onClick={Ohandler} isPick={false}>
        <OxImg isPick={false}>
          <Image src="/images/oImg.png" width={95.17} height={95.17}></Image>
        </OxImg>
      </OxButton>
      <OxButton onClick={Xhandler} isPick={false}>
        <OxImg isPick={false}>
          <Image src="/images/xImg.png" width={95.17} height={95.17}></Image>
        </OxImg>
      </OxButton>
    </Wrapper>
  );
};

export default SeelctOX;
