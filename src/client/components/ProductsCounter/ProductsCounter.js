import React from 'react';

const ProductsCounter = () => {
    return (
        <div className={"block1__container"}>
            <div className={"block1__small__container__left"}>
                <h1 className={"block__1__header"}>Продано курицы</h1>
                <div className={"block__1__text"}> 10000кг</div>
                <h1 className={"block__1__header"}>Накормлено семей</h1>
                <div className={"block__1__text"}> 10000000</div>
                <h1 className={"block__1__header"}>Еще что-то</h1>
                <div className={"block__1__text"}> 100500</div>

            </div>
        </div>
    );
};

export default ProductsCounter;