import React, {useState} from 'react';

// const Burger = ({active, setActive}) => {
const Burger = () => {
    /*****************************************************
     * STATE
     *****************************************************/
    const [active,setActive] = useState(false);
    const menuPoints = ['Home', 'News', 'About as', 'Our Products', 'Our partners', 'Contacts']
    const burgerMenuArr = menuPoints.map(item => <li className="burger-menu-item"><a className="burger__menu__text__link" href={item}>{item}</a></li>)
    /*****************************************************
     * RENDER
     *****************************************************/
    return (
        <>
            <div className="burger__btn" onClick={()=>setActive(!active)}>
                <div className={active ? 'active hamburger' : "hamburger"}><i className={active ? "active" : ""}/></div>
            </div>

            <container className={active ? 'menu__burger active' : "menu__burger"} >
                <div className={"menu__content"} >
                    <div className="menu__header">
                        <ul className={"menu__burger__text__container"}>
                            {burgerMenuArr}
                        </ul>
                    </div>
                </div>
                {/*</div>*/}
            </container>
        </>
    );
};

export default Burger;