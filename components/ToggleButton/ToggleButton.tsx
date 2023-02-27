import React, { ChangeEvent, useState } from 'react';
import * as Styled from './ToggleButton.styles';

interface ToggleButtonProps {
    helfText: {
        trueText: string;
        falseText: string;
    }
}

export default function ToggleButton({ helfText }:ToggleButtonProps) {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Styled.Container checked={checked}>
            <Styled.ToggleContainer>
                <Styled.Toggle 
                    id="toggle"
                    type="checkbox" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} 
                />
                <Styled.ToggleLabel for="toggle" checked={checked}>
                    <Styled.ToggleCircle checked={checked} />
                </Styled.ToggleLabel>
            </Styled.ToggleContainer>
            <Styled.HelfText>{checked ? helfText.trueText : helfText.falseText}</Styled.HelfText>
        </Styled.Container>
    );
}