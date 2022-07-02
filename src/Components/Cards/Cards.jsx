import React from 'react'
import { CardData } from '../../Data/Data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {
    return (
        <div className='Cards'>
            {CardData.map((card, idx)=>{ 
                return(
                    <div className='parentContainer'>
                        <Card 
                            title={card.title}   
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}

                            />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards