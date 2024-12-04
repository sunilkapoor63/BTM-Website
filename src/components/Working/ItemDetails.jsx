import React from 'react';
import "../../style/ItemDetails.scss";

function ItemDetail() {
  // Details of the first item from JustForYou
  const item = {
    image: "./images/shoes1.webp",
    text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
    price: "Rs 537.50 - Rs 569.38",
    detailedDescription: "Dominate the pickleball court with the Skechers Viper Court Women’s Pickleball Shoes. Featuring advanced cushioning, superior traction, and a durable Goodyear® Rubber Sole, these shoes offer exceptional performance and comfort.",
    keyfeature: "Advanced Cushioning:The incorporation of a durableGoodyear® Rubber Sole significantly enhances the performance of the Skechers Viper Court pickleball shoes. This feature provides exceptional traction and grip, making them ideal for quick movements and sudden stops on the court. Combined with advanced cushioning and a breathable design, these shoes offer optimal comfort and support for pickleball players of all levels."
  };

  return (
    <div className="item-detail">
      <div className="item-detail-container">
        {/* Left side - Image */}
        <div className="item-image">
          <img src={item.image} alt="Item" />
        </div>

        {/* Right side - Description */}
        <div className="item-description">
          <h2>{item.text}</h2>
          <h3>{item.price}</h3>
          <p>{item.detailedDescription}</p>
          <p>{item.keyfeature}</p>
          <div className="footer-details">
            <p>Material: Synthetic</p>
            <p className='shoes-sizes'>Available Sizes: UK 4 - 23.5 cm, UK 5 - 24.5 cm, UK 6 - 25.25 cm, UK 7 - 26 cm </p>
            <button>+Add to Cart</button>
            <button className='buttontwo'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
