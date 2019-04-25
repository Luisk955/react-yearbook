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
            <div className="card person-card"  key={i}>
                <img className="card-img-top" src={item.picture.medium} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{ item.name.first } { item.name.last }</h5>
                    <p className="card-text">{item.cell}</p>
                </div>
            </div>
        ));
        return (
           personData
        );
    }
}

export default Person;


