import { useState } from 'react';
import * as Styled from './CalculatorContainer.styles';
import CalculatorTypeA from '@components/CalculatorTypeA/CalculatorTypeA';
import CalculatorTypeB from '@components/CalculatorTypeB/CalculatorTypeB';

export default function CalculatorContainer() {
    const [type, setType] = useState<boolean>(false);

    return (
        <Styled.Container>
            

            {type ? (
                <CalculatorTypeA />
            ) : (
                <CalculatorTypeB />
            )}
        </Styled.Container>
    );
}