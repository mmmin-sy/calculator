import { useState, useEffect, useCallback } from 'react';
import * as Styled from './Calculator.styles';import CalculatorButtons from '@components/CalculatorButtons/CalculatorButtons';

interface CalculatorProps {
    type: boolean;
}

export default function Calculator({ type }: CalculatorProps) {
    const [number, setNumber] = useState<number>(0);
    const [error, setError] = useState<string | undefined>(undefined);
    const [operating, setOperating] = useState<(number|string)[]>([]);
    const lastValue = operating[operating.length - 1];

    useEffect(() => {
        reset();
    }, [type]);

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
        setError(undefined);

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
        } else if (val === '<') {
            backSpace();
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
                type ? clickOperatorForTypeTwo(val) : clickOperatorForTypeOne(val);

            } else {
                setOperating([...replaceValue(val)]);
            }
        }
    } 

    const clickOperatorForTypeTwo = (val: string) => {
        setOperating([...operating, val]);
    }

    const clickOperatorForTypeOne = (val: string) => {
        if(operating.length > 2 && val !== '.') {
            const currentTot = getMathematicalValue(operating.join(''));
            setOperating([currentTot, val]);
            setNumber(currentTot);
        } else {
            setOperating([...operating, val]);
        }
    }

    const total = (): void => {
        console.log(operating)
        if(typeof lastValue === 'number'){
            const operator = operating.join('');
            console.log(getMathematicalValue(operator))
            setNumber(getMathematicalValue(operator));
        } else {
            setError('Cannot end with an operator!');
        }
    }

    const getMathematicalValue = (str: string) =>{
        return new Function('return ' + str)();
    }

    const reset = () => {
        setNumber(0);
        setOperating([]);
        setError(undefined);
    }

    const backSpace = () => {
        if(typeof lastValue === 'number'){
            const numStr = lastValue.toString();
            const subStr = numStr.substring(0, numStr.length-1);
            setOperating([...replaceValue(parseInt(subStr))]);
            setNumber(parseInt(subStr));
        } else {
            const newArr = operating;
            newArr.slice(-1);
            console.log(newArr)
            setOperating([...newArr])
        }
    }
    
    const handleKeyPress = (e: KeyboardEvent) => {
        const ops = ['+', '-', '/', '*'];
        const key = e.key;

        if(!Number.isNaN(parseInt(key))) {
            getValue(parseInt(key));
        } else if (ops.includes(key) ) {
            getValue(key)
        } else if (e.key === 'Enter') {
            total();
        } else if (e.key === ',') {
            getValue('.');
        } else if (e.key === 'Backspace'){
            backSpace();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <Styled.Container>
            <Styled.Screen>
                <Styled.SubOperating>{operating.length > 1 && operating.join('')}</Styled.SubOperating>
                <div>{error ? error : number}</div>
            </Styled.Screen>
            
            <CalculatorButtons getValue={getValue} />
        </Styled.Container>
    );
}