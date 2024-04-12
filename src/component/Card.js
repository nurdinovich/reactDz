import { useTheme } from "../App"


const Card = ({ img, title, price, oldPrice, despreition }) => {
    const isDarkMode = useTheme()
    return (
        <div className={`card ${isDarkMode ? "darks" : "ligth"}`}>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <p> {despreition}</p>
            <div>
                <b>{price}$</b>
                <span>{oldPrice}</span>
            </div>
            <button type="button">add to cart</button>
        </div>
       
    )
}
export default Card