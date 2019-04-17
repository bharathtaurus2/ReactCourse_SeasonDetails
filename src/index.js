import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {latitude: null};
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({latitude: pos.coords.latitude})
            }, (err) => console.log(err)
        );
    }
    render() {
        
        return <div>Latitude: {this.state.latitude}</div>;
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));