import { useEffect, useState } from 'react'
import { RESTAURANT_LIST_API, data } from '../constant'

const useRestaurantData = () => {
  const [restaurantList, setRestaurantList] = useState(data || [])
  const [carousel, setCarousel] = useState({ cards: Array(10).fill('') })

  useEffect(() => {
    getResturantsList()
  }, [])

  async function getResturantsList () {
    try {
      const res = await fetch(RESTAURANT_LIST_API, {})
      const data = await res.json()
      let response = data?.data?.cards
      setRestaurantList(response[2]?.data?.data?.cards)
      setCarousel(response[0]?.data?.data)
    } catch (error) {}
  }

  return [restaurantList, carousel]
}
export default useRestaurantData
