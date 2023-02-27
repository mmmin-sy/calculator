import styled, { css } from 'styled-components';
import { Button } from '@components/Button/Button.styles';

export const Container = styled.div`
    max-width: 500px;
    background-color: #485461;
    border-radius: 5px;
    padding: 10px;
`;

export const screen = styled.div`
    text-align: right;
    background-color: #435769;
    border-radius: 5px;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
`;

export const subOperating = styled.div`
    font-weight: normal;
    font-size: 16px;
`;

export const buttonArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    ${Button} {
        border: 1px solid #ffffff;
        background-color: #503cd1;
        color: #ffffff;
    }
`;
