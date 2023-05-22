import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_API } from '../constant'
import ResCard from './ResCard'
import Category from './Category'

const Resturant = () => {
  const { id } = useParams()
  const [menuList, setMenuList] = useState(Array(8).fill(''))
  const [resturantInfo, setRestaurantInfo] = useState('')

  useEffect(() => {
    getResturantMenuList()
  }, [])

  async function getResturantMenuList () {
    const res = await fetch(`${RESTAURANT_MENU_API}&restaurantId=${id}`)
    const data = await res.json()
    let response = data?.data?.cards
    if (response?.length) {
      const info = response[0]?.card?.card?.info
      let category = response[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      category = category.filter(({ card }) => card.card.title)
      // console.log(category)
      setRestaurantInfo(info)
      setMenuList(category)
    }
  }

  return (
    <div className='resturant'>
      <div className='d-flex'>
        <ResCard data={{ ...resturantInfo, className: 'menu-card' }} />
        <div className='card menu-card'>
          <h3>Menu</h3>
          {menuList.map((category, index) => (
            <Category
              data={{ ...category.card, className: 'category' }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Resturant
