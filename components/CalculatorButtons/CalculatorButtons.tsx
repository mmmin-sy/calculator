import * as Styled from './CalculatorButtons.styles';
import ButtonRow from '@components/CalculatorButtons/ButtonRow';

interface CalculatorButtonsProps {
    getValue: (val: number | string) => void;
}

type ButtonValueType = (number | string) [];

const BUTTON_VALUES: ButtonValueType[] = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, '*'], 
    [4, 5, 6, '-'], 
    [1, 2, 3, '+'], 
    [0, '.', '=']
];

export default function CalculatorButtons({ getValue }: CalculatorButtonsProps) {
    return (
        <>
        {
            BUTTON_VALUES.map((value) => (
                <ButtonRow 
                    row={value} 
                    lastRow={value.length === 3} 
                    getValue={getValue}
                />
            ))
        }
        </>
    );
}