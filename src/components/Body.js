import React, { useState } from 'react'
import useOnline from '../hooks/useOnline'
import useRestaurantData from '../hooks/useRestaurantData'
import Carousel from './Carousel'
import ResCard from './ResCard'
import Shimmer from './Shimmer'

function search (searchText, resturantsList) {
  return resturantsList.filter(res =>
    res.data.name.toLowerCase().includes(searchText)
  )
}

const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [reslist, carousel] = useRestaurantData()
  const isOnline = useOnline()

  const filter = () => {
    const list = reslist.filter(res => res.data.avgRating > 4.2)
    setReslist(list)
  }
  const reset = () => {
    // setReslist(restaurants.data.data.cards)
  }
  const sortByRatings = () => {
    const list = reslist.sort((a, b) => b.data.avgRating - a.data.avgRating)
    setReslist(list)
  }
  if (!isOnline) {
    return (
      <div className='mt-32'>
        <h3 className='text-bold'>No Internet Connection 🔴</h3>
      </div>
    )
  }

  return (
    <div className='body'>
      <Carousel {...(carousel.cards.length && { ...carousel })} />

      <h3>{reslist?.length} resturants</h3>
      <div className='py-2 px-2 border-lime-500 '>
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
      <div className='search d-flex'>
        <input
          type='text'
          className='form-control'
          placeholder='Search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        &nbsp;
        <button
          type='button'
          className='btn btn-dark'
          onClick={() => {
            setReslist(search(searchText, reslist))
          }}
        >
          Search
        </button>
      </div>
      <div className='res-list d-flex'>
        {!reslist.length ? (
          <Shimmer />
        ) : (
          reslist.map(res => (
            <ResCard
              data={{ ...res.data, className: 'res-card' }}
              key={res.data.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
export default Body
