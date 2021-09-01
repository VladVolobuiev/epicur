import React from 'react';

const Button = ({className, handleClick, text, type = 'button', tooltipText}) => {

    const newClassName = 'btn ' + className
const currentTooltip = tooltipText?tooltipText:''
    return (
        <input type={type}
               value = {text}
               onClick={handleClick}

               className={newClassName}
               data-toggle="tooltip" data-placement="bottom" title={currentTooltip}
        />
    );
};

export default Button;