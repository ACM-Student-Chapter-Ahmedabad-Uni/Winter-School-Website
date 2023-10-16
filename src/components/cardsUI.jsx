import React, {Component} from 'react'
import Card from './cardUI';
import cardImage from '../images/Card-dummy.jpeg';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={cardImage} title="card 1"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={cardImage} title="card 2"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={cardImage} title="card 1"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;