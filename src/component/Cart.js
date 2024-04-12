import CartItem from "./CartItem";
import Data from "../data/data.json";


function Cart({setNotCart}) {
    
    return (
      
        <div className="cart" onClick={()=>setNotCart(false)}>
          <div className="X" onClick={() => setNotCart(false)}>X 0</div>
          {Data?.map((item) => (
            <CartItem
              key={item.id}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              title={item.title}
              img={item.image}
            />
          ))}
        </div>
   
      ); 
}

export default Cart;
