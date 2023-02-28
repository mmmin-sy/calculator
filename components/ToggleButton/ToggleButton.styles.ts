import styled, { css } from 'styled-components';

interface ToggleStyleProps {
    checked?: boolean;
}

export const Container = styled.div<ToggleStyleProps>`
    ${({ checked }) => css`
        display: flex;
        align-items: center;
    `}
`;

export const ToggleContainer = styled.div<ToggleStyleProps>`
    ${({ checked }) => css`
        width: 70px;
        height: 30px;
        position: relative;
        border-radius: 20px;
        margin-right: 10px;

        ${!checked && css`
            background: #242424;
        `}

        ${checked && css`
            background: #E4C4D7;
        `}
    `}
`;

export const Toggle = styled.input<ToggleStyleProps>`
    ${() => css`
        border: 0;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        margin: 0;
        padding: 0;
        opacity: 0;        
    `}
`;

export const ToggleCircle = styled.span<ToggleStyleProps>`
    ${({ checked }) => css`
        background-color: #ffffff;
        display: inline-block;
        width: 24px;
        height: 24px;
        top: 3px;
        position: absolute;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.5s ease-in;
        left: 0;

        ${checked && css`
            transform: translateX(4px);
        `}
        ${!checked && css`
            transform: translateX(41px);
        `}
    `}
`;

export const ToggleLabel = styled.label<ToggleStyleProps>`
    ${({ checked }) => css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;

        ${checked && css`
            text-align: right;
        `}
    `}  
`;

export const HelfText = styled.div`

`;