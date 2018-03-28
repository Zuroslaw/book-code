import React from 'react';
import { post } from '../services/postService';

export class Item extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ quantity: 1})
    }

    handleChange = event => {
        this.setState({ quantity: event.target.value });
    }
    
    onAddToCart = event => {
        event.preventDefault();

        if (window.keycloak.authenticated) {
            const { item: { itemId } } = this.props;
            const { quantity } = this.state;

            const cartItem = { itemId, quantity };
            
            post("cart/"+window.userInfo.sub, cartItem, {additive: true});
        } else {
            alert("You must be logged in to add the item to the cart");
        }
    }

    render() {
        const { item } = this.props;
        return (
            <div className="col-md-3">
                <div className="pet-grid">
                    <div className="row">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="row">
                        <p className="description">{item.description}</p>
                    </div>
                    <div className="row">
                        <div className="dock-right">
                            <h4>{item.price}$</h4>
                        </div>
                    </div>

                    <form className="form-inline" >
                        <div className="row">
                            <div className="dock-right">
                                <input type="number" className="form-control" min="1" max="9"  defaultValue="1" onChange={this.handleChange} />
                                <input type="button" className="btn btn-default" value="Add to cart" onClick={this.onAddToCart}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Item;