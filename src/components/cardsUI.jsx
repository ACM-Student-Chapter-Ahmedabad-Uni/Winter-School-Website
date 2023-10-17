import React, {Component} from 'react'
import Card from './cardUI';
import cardImage from '../images/Card-dummy.jpeg';

class Cards extends Component{
    render(){
        return React.createElement(
            'div', 
            {className: "container-fluid d-flex justify-content-center"},
            React.createElement(
                'div',
                {className: "row"},
                React.createElement(
                    'div',
                    {className: "col-12 col-sm-6 col-md-4"},
                    React.createElement(Card, {imgsrc: cardImage, title: "card 1"})
                ),
                React.createElement(
                    'div',
                    {className: "col-12 col-sm-6 col-md-4"},
                    React.createElement(Card, {imgsrc: cardImage, title: "card 2"})
                ),
                React.createElement(
                    'div',
                    {className: "col-12 col-sm-6 col-md-4"},
                    React.createElement(Card, {imgsrc: cardImage, title: "card 3"})
                )
            )
        );
    }
}

export default Cards;
