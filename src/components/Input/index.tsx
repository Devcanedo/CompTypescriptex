import React, { InputHTMLAttributes } from 'react';
//import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({icon:Icon, ...rest}) => {
    return(
        <div>
            <Icon />
            <input {...rest}/>
        </div>
    );
}

export default Input;

// = ({...props}) agra = ({...rst})