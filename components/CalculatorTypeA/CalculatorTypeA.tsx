import { useState } from 'react';
import * as Styled from './CalculatorTypeA.styles';
import Button from '@components/Button/Button';

const BUTTON_VALUE: (number | string) [] = [
    'C', '+-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='
];

export default function CalculatorTypeA() {
    const [number, setNumber] = useState<number>(0);
    const [operating, setOperating] = useState<(number|string)[]>([]);
    const lastValue = operating[operating.length - 1];

    const replaceValue = (valToReplace: number|string, transformed?: boolean) => {
        const newArr = operating;
        const lastValue = operating[operating.length - 1];
        let operator = valToReplace;

        if (typeof valToReplace === 'number' && typeof lastValue === 'number' && transformed) {
            operator = lastValue * 10 + valToReplace;
        }
        
        newArr.splice(-1, 1, operator);    
        return newArr;
    }

    const getValue = (val: number | string) => {
        if (typeof val === 'number'){
            if(operating.length === 0){
                setOperating([val]);
                setNumber(val);
            } else if(typeof lastValue === 'number'){
                setOperating([...replaceValue(val, true)]);
                setNumber(lastValue * 10 + val);
            } else {
                setOperating([...operating, val]);
                setNumber(val);
            }
        } else if (val === '=') {
            total();
        } else if (val === 'C') {
            reset();
        } else if (val === '+-') {
            if(typeof lastValue === 'number'){           
                setOperating([...replaceValue(lastValue)]);
            } else {
                const newArr = operating;
                const lastTwoEle = operating[operating.length - 2];
                if (typeof lastTwoEle === 'number') {
                    newArr.splice(-2, 1, lastTwoEle * -1);       
                }                
                
                setOperating([...newArr]);        
            }
        } else {
            if(typeof lastValue === 'number'){
                setOperating([...operating, val]);
            } else {
                setOperating([...replaceValue(val)]);
            }
        }
        console.log('operating : ', operating)
    } 

    const total = (): void => {
        const operator = operating.join('');
        setNumber(getMathematicalValue(operator));
    }

    const getMathematicalValue = (str: string) =>{
        return new Function('return ' + str)();
    }

    const reset = () => {
        setNumber(0);
        setOperating([]);
    }

    return (
        <Styled.Container>
            <Styled.screen>
                <Styled.subOperating>{operating.length > 1 && operating.join('')}</Styled.subOperating>
                <div>{number}</div>
            </Styled.screen>
            <Styled.buttonArea>
                {BUTTON_VALUE.map((value) => (
                    <Button onClick={(val) => getValue(val)} value={value}>
                        {value}
                    </Button>
                ))}
            </Styled.buttonArea>
        </Styled.Container>
    );
}