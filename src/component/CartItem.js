const CartItem = ({ img,title,price,oldPrice,despreition}) => {
    return (
        <div className="cartItem">
           <img src={img} alt=""/>
            <h1>{title}</h1>
            <p>{despreition}</p>
            <div>
                <b>{price}$</b>
                <span>{oldPrice}</span>
            </div>
            <button type="button">delete to cart</button>
        </div>
    );
};

export default CartItem;