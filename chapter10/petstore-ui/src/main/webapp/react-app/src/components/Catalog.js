import React from 'react';
import Item from './Item';

export class Catalog extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
  
    componentDidMount() {
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        if (window.keycloak.token != null) {
            headers.set('Authorization', 'Bearer ' + window.keycloak.token);
        }

        fetch(window.clientApiGateway+'/catalog/item', { headers, method: "GET" })
            .then(d => {
                console.log(d)
                return d.json();
            })
            .then(items => {
                this.setState({ items })
            })
            .catch(err => console.log(err.stack));
    }

    render() {
      return (
        <div className="container">
            {
                this.state.items.map(e => <Item key={e.name} item={e}/>)
            }
        </div>
      )
    }
};

export default Catalog;
  