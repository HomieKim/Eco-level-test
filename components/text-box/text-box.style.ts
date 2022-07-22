import styled from 'styled-components';

export const AboutmeDescriptionWrapper = styled.div`
    width: 66%;
    height: auto;
    margin: 30px auto;
    padding: 3%;
    background-color: #D0F4BA;
    border-radius: 30px;
`;

export const AboutmeTop = styled.div`
    display: flex;
    align-items: center;
`

export const AboutmeDescriptionImg = styled.img.attrs({
    src: `https://img.icons8.com/color/48/000000/pin.png/`
})`
    width: 21px;
    height: 21px;
    margin-right: 4px;
`;

export const AboutmeTitle = styled.span`
    font-size: 14px;
    color: #0C0C0C;
`;

export const AboutmeDescriptionContent = styled.p`
    font-size: 16px;
    color: black;
    font-weight: 500;
`