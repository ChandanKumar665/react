import { useEffect, useState } from 'react'
import { RESTAURANT_MENU_API } from '../constant'

const useRestaurant = restaurantId => {
  const [menuList, setMenuList] = useState(Array(8).fill(''))
  const [restaurantInfo, setRestaurantInfo] = useState('')

  useEffect(() => {
    getResturantMenuList()
  }, [])

  async function getResturantMenuList () {
    const res = await fetch(
      `${RESTAURANT_MENU_API}&restaurantId=${restaurantId}`
    )
    const data = await res.json()
    let response = data?.data?.cards
    if (response?.length) {
      const info = response[0]?.card?.card?.info
      let category = response[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      category = category.filter(({ card }) => card.card.title)
      setRestaurantInfo(info)
      setMenuList(category)
    }
  }

  return [restaurantInfo, menuList]
}

export default useRestaurant
