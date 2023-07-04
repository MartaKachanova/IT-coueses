export default function FavouritesList() {
  return (
    <div className="favourites__container">
      <div className="table__container">
        <table className="order__table" id="favouriteTable">
          <caption>Favourite Items</caption>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="item__info">
                  <img
                    src="images/products/cabriolet.png"
                    alt="Cabriolet"
                    height="100"
                  />
                  <div>
                    <p className="item__info--title">Cabriolet</p>
                  </div>
                </div>
              </td>
              <td>$900</td>
              <td>
                <span className="item__sale">- 25%</span>
              </td>
              <td>$675</td>
              <td>
                <button className="item__favourite">
                  <img
                    src="images/product__favourite--true.png"
                    alt="favourite"
                    height="20"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="item__info">
                  <img
                    src="images/products/commercial-plane.png"
                    alt="Commercial Plane"
                    height="100"
                  />
                  <div>
                    <p className="item__info--title">Commercial Plane</p>
                  </div>
                </div>
              </td>
              <td>$1000</td>
              <td>-</td>
              <td>$1000</td>
              <td>
                <button className="item__favourite">
                  <img
                    src="images/product__favourite--true.png"
                    alt="favourite"
                    height="20"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
