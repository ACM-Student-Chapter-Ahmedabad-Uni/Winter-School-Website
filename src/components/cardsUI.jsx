import React, { Component } from 'react';
import Card from './cardUI';
import cardImage from '../images/Card-dummy.jpeg';

class Cards extends Component {
    render() {
        return (
            <div className="card-section">
                <h2 className="text-left" style={{marginLeft:'30px', marginTop:'30px'}}>Lorem ipsum dolor sit</h2>
                <p className="text-left" style={{marginLeft:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className="card-parent">
                    <div className="">
                        <Card imgsrc={cardImage} title="card 1" />
                    </div>
                    <div className="">
                        <Card imgsrc={cardImage} title="card 2" />
                    </div>
                    <div className="">
                        <Card imgsrc={cardImage} title="card 3" />
                    </div>
                    <div className="">
                        <Card imgsrc={cardImage} title="card 3" />
                    </div>
                    <div className="">
                        <Card imgsrc={cardImage} title="card 3" />
                    </div>
                    <div className="">
                        <Card imgsrc={cardImage} title="card 3" />
                    </div>
                    </div>
            </div>
        );
    }
}

export default Cards;