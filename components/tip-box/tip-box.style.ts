import styled from 'styled-components';

export const TipWrapper = styled.div`
    width: 66%;
    height: auto;
    margin: 10px auto;
    padding: 3%;
    background-color: #D0F4BA;
    border-radius: 30px;
`;

export const TipTop = styled.div`
    display: flex;
    align-items: center;
`

export const TipImg = styled.img.attrs({
    src: `https://img.icons8.com/color/48/000000/light.png`
})`
    width: 21px;
    height: 21px;
    margin-right: 4px;
`;

export const TipTitleFirst = styled.span`
    font-size: 14px;
    color: #29263B;
    margin-right: 0.25em;
`
export const TipTitleSecond = styled.span`
    font-size: 14px;
    color: #075800;
`
