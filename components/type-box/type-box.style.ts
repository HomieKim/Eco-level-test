import styled from 'styled-components';

export const YourTypeIs = styled.p`
    font-size: 16px;
    color: #29263B;
    text-align: center;
`

export const YourLevel = styled.p`
    font-size: 20px;
    color: #188905;
    text-align: center;
    font-weight: 800;
`
export const YourLevelImg = styled.img.attrs({
    src: `http://localhost:3000/images/iconLv1.png`
})`
    width: 240px;
    height: 240px;
    display: block;
    margin: 0 auto;
`;
