import React, { Component } from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component';


export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(element => <Card key={element.id} monster={element} />)
            }
        </div>
    );
    

};
