export default function ItemsList() {
  return (
    <section className="category" data-name="Boat">
      <h2>Boat</h2>
      <div className="category__container">
        <div className="product">
          <button className="product__favourite">
            <img
              src="images/product__favourite--true.png"
              alt="favourite"
              height="20"
            />
          </button>
          <img
            src="images/products/aircraft-carrier.png"
            className="product__img"
            alt="Aircraft Carrier"
            height="80"
          />
          <p className="product__title">Aircraft Carrier</p>
          <div className="product__sale">
            <span className="product__sale--old">$30000</span>
            <span className="product__sale--percent">-2%</span>
          </div>
          <div className="product__info">
            <span className="product__price">$29400</span>
          </div>
        </div>

        <div className="product">
          <button className="product__favourite">
            <img
              src="images/product__favourite.png"
              alt="favourite"
              height="20"
            />
          </button>
          <img
            src="images/products/boat.png"
            className="product__img"
            alt="Boat"
            height="80"
          />
          <p className="product__title">Boat</p>
          <div className="product__info">
            <span className="product__price">$700</span>
          </div>
        </div>

        <div className="product">
          <button className="product__favourite">
            <img
              src="images/product__favourite.png"
              alt="favourite"
              height="20"
            />
          </button>
          <img
            src="images/products/speed-boat.png"
            className="product__img"
            alt="Speed Boat"
            height="80"
          />
          <p className="product__title">Speed Boat</p>
          <div className="product__sale">
            <span className="product__sale--old">$2000</span>
            <span className="product__sale--percent">-34%</span>
          </div>
          <div className="product__info">
            <span className="product__price">$1320</span>
          </div>
        </div>
      </div>
    </section>
  );
}
