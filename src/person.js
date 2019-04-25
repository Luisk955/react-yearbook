import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
        .then((response) => {
            return response.json()
        })
        .then((resp) => {
            this.setState({ person: resp.results })
        });
    }

    render() {
        const personData = this.state.person.map((item, i) => (
            <div className="card person-card mx-auto"  key={i}>
                <img className="card-img-top" src={item.picture.large} alt="Card"/>
                <div className="card-body">
                    <p className="h4 card-title text-capitalize">{ item.name.first } { item.name.last }</p>
                    <p className="card-text">{item.cell}</p>
                    <p className="card-text">{item.email}</p>
                </div>
            </div>
        ));
        return (
           personData
        );
    }
}

export default Person;


