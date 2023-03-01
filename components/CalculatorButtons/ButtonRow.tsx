import * as Styled from './CalculatorButtons.styles';
import Button from '@components/Button/Button';

interface ButtonRowProps {
    row: (number | string)[];
    lastRow?: boolean;
    getValue: (val: number | string) => void;
}

export default function ButtonRow({ row, lastRow, getValue }: ButtonRowProps) {
    return (
        <Styled.Row lastRow={lastRow}>
            {row.map((buttonValue) => (
                <Styled.ButtonWrap>
                    <Button 
                        onClick={(val) => getValue(val)} 
                        value={buttonValue}
                    >
                        {buttonValue}
                    </Button>
                </Styled.ButtonWrap>                
            ))}
        </Styled.Row>
    );
}