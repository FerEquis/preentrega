
import "./Item.css";

export const Item = ({ name, price, description, image, children }) =>{
    return (
       <article className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            {children}
            </article>
    );
};