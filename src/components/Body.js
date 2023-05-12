import React, { useState, useEffect } from 'react'
import ResCard from './ResCard'
import Crousel from './Crousel'
import { data, RESTAURANT_LIST_API } from '../constant'

function search (searchText, resturantsList) {
  return resturantsList.filter(res =>
    res.data.name.toLowerCase().includes(searchText)
  )
}

const Body = () => {
  const [dataList, setDataList] = useState(data)
  const [carousel, restaurants] = dataList
  const [reslist, setReslist] = useState(restaurants.data.data.cards)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getResturantsList()
  }, [])

  async function getResturantsList () {
    const res = await fetch(RESTAURANT_LIST_API)
    const data = await res.json()
    let response = data?.data?.cards
    response = [response[0], response[2]]
    setReslist(response[1].data.data.cards)
  }

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
        {reslist.map(res => (
          <ResCard {...res.data} key={res.data.id} />
        ))}
      </div>
    </div>
  )
}
export default Body
