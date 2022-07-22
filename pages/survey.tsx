import { NextPage } from 'next';
import {SurveyEarthWrapper, SurveyNumber,Surveytitle,SelectButtonWrapper,SelectText} from 'styles/survey.style';
import Image from 'next/image';
import {QUESTIONS} from 'utils/constatns';
import {Button} from 'components/button/button.style'
const SurVeyPage:NextPage = () => {
  return (
    <div>
      <SurveyEarthWrapper>
        <Image src='/images/earth.png' width={23} height={23}></Image>
      </SurveyEarthWrapper>
      <SurveyNumber>
        {QUESTIONS[0].qNumber}
      </SurveyNumber> 
      <Surveytitle>
        {QUESTIONS[0].title}
      </Surveytitle>
      
      {QUESTIONS[0].selectList?.map(list=>
      <SelectButtonWrapper>
        <Button isPick={false}>
          <SelectText>{list}</SelectText>
        </Button>
        </SelectButtonWrapper>
        
        )}
  
    </div>
  )
}
 

export default SurVeyPage;