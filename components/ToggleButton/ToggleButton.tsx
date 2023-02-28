import React, { ChangeEvent, useState } from 'react';
import * as Styled from './ToggleButton.styles';

interface ToggleButtonProps {
    helfText: {
        trueText: string;
        falseText: string;
    },
    onToggleChange?: (toggle: boolean) => void;
}

export default function ToggleButton({ helfText, onToggleChange }:ToggleButtonProps) {
    const [checked, setChecked] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);

        if(onToggleChange){
            onToggleChange(e.target.checked);
        }        
    }

    return (
        <Styled.Container>
            <Styled.ToggleContainer checked={checked}>
                <Styled.Toggle 
                    id="toggle"
                    type="checkbox" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} 
                />
                <Styled.ToggleLabel for="toggle" checked={checked}>
                    <Styled.ToggleCircle checked={checked} />
                </Styled.ToggleLabel>
            </Styled.ToggleContainer>
            <Styled.HelfText>{checked ? helfText.trueText : helfText.falseText}</Styled.HelfText>
        </Styled.Container>
    );
}