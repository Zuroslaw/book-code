
import { post, remove } from '../services/postService';

//todo kurwa
export class CartItem extends React.Component {

    handleChange = event => {
        const { item } = this.props;
        item.quantity = event.target.value
        post("cart/"+userInfo.sub, {itemId : item.itemId, quantity: item.quantity}, {additive: false});
        this.props.reloadParent();
    }

    removeItem = () => {
        const { item: { itemId } } = this.props;
        remove(`cart/${userInfo.sub}/${itemId}`);
        this.props.reloadParent();
    }

    render() {
        const { item } = this.props;

        return (
            <tr>
                <td data-th="Product" className="text-center">
                    <h3>{item.name}</h3>
                </td>
                <td data-th="Price" className="text-center">{item.price}$</td>
                <td data-th="Quantity" className="text-center">
                    <input type="number" className="form-control" value={item.quantity} onChange={this.handleChange} />
                </td>
                <td className="text-center">
                    <span className="glyphicon glyphicon-remove" onClick={this.removeItem}/>
                </td>
                <td data-th="Subtotal" className="text-center">{item.price * item.quantity}$</td>
            </tr>
        );
    }
};

export default CarItem;