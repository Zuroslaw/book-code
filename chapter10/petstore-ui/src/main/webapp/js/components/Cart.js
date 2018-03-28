import { Link } from '../ReactConstants';
import CartItem from './CarItem';

export class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            total: 0
        };
    }
    
    load = () => {
        console.log(clientApiGateway+'/cart/'+userInfo.sub);

        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        if (keycloak.token != null) {
            headers.set('Authorization', 'Bearer ' + keycloak.token);
        }

        fetch(`${clientApiGateway}/cart/${userInfo.sub}`, {method: 'GET', headers})
            .then(d => d.json())
            .then(items => {
                const total = items.reduce((prev, curr) => {
                    return prev + curr.price * curr.quantity
                }, 0);
                this.setState({items, total})
            })
            .catch(err => console.log(err.stack));
    }

    componentDidMount() {
        this.load();
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th width="60%" className="text-center">Product</th>
                                <th width="15%" className="text-center">Price</th>
                                <th width="5%" className="text-center">Quantity</th>
                                <th width="5%" className="text-center"/>
                                <th width="15%" className="text-center">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(e => 
                                    <CartItem key={e.itemId} item={e} reloadParent={this.load}/>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr className="visible-xs">
                                <td className="text-center"><strong>Total 1.99</strong></td>
                            </tr>
                            <tr>
                                <td><Link to="catalog" className="btn btn-default">Continue shopping</Link></td>
                                <td colspan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><strong>Total {this.state.total}</strong></td>
                                <td><Link to="catalog" className="btn btn-default">Buy</Link></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="col-md-3"/>
            </div>
        );
    }


};

export default Cart;
