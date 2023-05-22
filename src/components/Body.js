import React, { useState, useEffect } from 'react'
import ResCard from './ResCard'
import Crousel from './Crousel'
import { RESTAURANT_LIST_API } from '../constant'
import Shimmer from './Shimmer'

function search (searchText, resturantsList) {
  return resturantsList.filter(res =>
    res.data.name.toLowerCase().includes(searchText)
  )
}

const Body = () => {
  // const [dataList, setDataList] = useState([])
  const [carousel, setCarousel] = useState({ cards: [] })
  const [reslist, setReslist] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getResturantsList()
  }, [])

  async function getResturantsList () {
    const res = await fetch(RESTAURANT_LIST_API, { mode: 'cors' })
    const data = await res.json()
    let response = data?.data?.cards
    setReslist(response[2]?.data?.data?.cards)
    setCarousel(response[0]?.data?.data)
  }

  const filter = () => {
    const list = reslist.filter(res => res.data.avgRating > 4.2)
    setReslist(list)
  }
  const reset = () => {
    // setReslist(restaurants.data.data.cards)
  }
  const sortByRatings = () => {
    const list = reslist.sort((a, b) => b.data.avgRating - a.data.avgRating)
    console.log(list)
    setReslist(list)
  }
  console.log(reslist)

  return (
    <div className='body'>
      <Crousel
        {...((carousel.cards.length && { ...carousel }) || {
          ...{ cards: Array(10).fill('') }
        })}
      />

      <h3>{reslist?.length} resturants</h3>
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
