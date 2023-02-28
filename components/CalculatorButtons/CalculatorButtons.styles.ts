import styled, { css } from 'styled-components';
import { Button } from '@components/Button/Button.styles';

interface RowStyleProps {
    lastRow?: boolean;
}

export const Row = styled.div<RowStyleProps>`
    ${({ lastRow }) => css`
        display: grid;
        margin-bottom: 10px; 

        ${!lastRow && css`
            grid-template-columns: repeat(4, 1fr);    
        `}

        ${lastRow && css`
            grid-template-columns: 1fr 1fr 2fr;    
        `}

        ${Button} {
            width: 100%;
            border: 1px solid #ffffff;
            background-color: #503cd1;
            color: #ffffff;

            
        }
    `}
`;

export const ButtonWrap = styled.div`
    padding-right: 10px;

    &:last-child {
        padding-right: 0;    
    }
`;

