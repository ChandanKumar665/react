import React, { useState } from 'react'
import ResCard from './ResCard'
import Crousel from './Crousel'
import { data } from '../constant'

const [carousel, restaurants] = data

const Body = () => {
  const [reslist, setReslist] = useState(restaurants.data.data.cards)

  const filter = () => {
    const list = reslist.filter(res => res.data.avgRating > 4.2)
    setReslist(list)
  }
  const reset = () => {
    setReslist(restaurants.data.data.cards)
  }
  const sortByRatings = () => {
    const list = reslist.sort((a, b) => b.data.avgRating - a.data.avgRating)
    console.log(list)
    setReslist(list)
  }
  return (
    <div className='body'>
      <Crousel {...carousel.data.data} />
      <h3>{reslist.length} resturants</h3>
      <div className='filter'>
        <button type='button' className='btn btn-dark' onClick={filter}>
          {'Filter > 4.2'}
        </button>
        &nbsp;
        <button type='button' className='btn btn-dark' onClick={sortByRatings}>
          Sort by ratings
        </button>
        &nbsp;
        <button type='button' className='btn btn-light' onClick={reset}>
          Reset
        </button>
      </div>
      <hr></hr>
      <div className='res-list d-flex'>
        {reslist.map(res => (
          <ResCard {...res.data} key={res.data.id} />
        ))}
      </div>
    </div>
  )
}
export default Body
