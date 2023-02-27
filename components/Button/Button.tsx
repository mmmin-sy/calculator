import * as Styled from './Button.styles';

interface ButtonProps {
    children: React.ReactNode;
    onClick: (val: number | string) => void;
    value: number | string;
}

export default function Button({ children, onClick, value }: ButtonProps) {

    return (
        <Styled.Button 
            onClick={() => onClick(value)} value={value}
        >
            {children}
        </Styled.Button>
    )
}