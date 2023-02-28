import { ChangeEvent, useState } from 'react';
import * as Styled from './CalculatorContainer.styles';
import Calculator from '@components/Calculator/Calculator';
import ToggleButton from '@components/ToggleButton/ToggleButton';

export default function CalculatorContainer() {
    const [type, setType] = useState<boolean>(false);

    return (
        <>
            <ToggleButton 
                helfText={{ trueText: 'Type 2', falseText: 'Type 1' }} 
                onToggleChange={(type: boolean) => setType(type)}
            />
            <Styled.Info>
                {type 
                    ? 'When Sum botton is pressed, all entered values are calculated.' 
                    : 'When an operator is entered, the calculation ist performed immediately.'
                }
            </Styled.Info>
            <Calculator type={type} />
            
        </>
    );
}