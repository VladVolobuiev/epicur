import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../../../client/components/Svg/Images/fullLogo.svg';
// import svg from '../../../img/logo_EPIKUR_PNG_4.svg';
import './logos-animation.scss'

const MyComponent = ({classname}) =>
    <div className={classname}>
        <ReactVivus
        id="Layer_1"
        option={{
            file: svg,
            animTimingFunction: 'scenario',
            type: 'async',

            duration:100,
            start: 'autostart',
            onReady: console.log
        }}
        style={{width: '200px' }}
        callback={console.log}
    /></div>

export default MyComponent;