import axios from 'axios';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: [],
        };

        this.loadCart = this.loadCart.bind(this);
    }

    componentDidMount() {
        //load user cart
        this.loadCart();
    }

    loadCart() {
        axios.get('/admin/cart').then(res => {
            const cart = res.data;
            this.setState({ cart })
        })
    }

    render() {
        const { cart } = this.state;
        return (
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Scan Barcode ..." />
                        </div>
                        <div className="col">
                            <select name="" id="" className="form-control">
                                <option value="">Walking Customer </option>
                            </select>
                        </div>
                    </div>
                    <div className="user-cart">
                        <div className="card">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(c => (
                                        <tr>
                                            <td>{c.name}</td>
                                            <td><input type="text" className="form-control form-control-sm qty" value={c.pivot.quantity} />
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                            <td className="text-right">Rs {(c.price * c.pivot.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">Total:</div>
                        <div className="col text-right">$ 5.00</div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-danger btn-block">Cancel</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-8">
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Search Product ..." />
                    </div>
                    <div className="order-product">
                        <div className="item"><img
                            src="http://localhost:8000/storage/products/y4ISFBJS9yGkZmIJaWyUS8p9wVS6gr9gbpDZaJkU.jpg"
                            alt="" />
                            <h5>Amritha</h5>
                        </div>
                        <div className="item"><img
                            src="http://localhost:8000/storage/products/y4ISFBJS9yGkZmIJaWyUS8p9wVS6gr9gbpDZaJkU.jpg"
                            alt="" />
                            <h5>Amritha</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;

if (document.getElementById('cart')) {
    ReactDOM.render(<Cart />, document.getElementById('cart'))
}
