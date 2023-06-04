import { useParams } from 'react-router-dom'
import useRestaurant from '../hooks/useRestaurant'
import Category from './Category'
import ResCard from './ResCard'

const Resturant = () => {
  const { id } = useParams()

  const [resturantInfo, menuList] = useRestaurant(id)
  return (
    <div className='resturant'>
      <div className='d-flex'>
        <ResCard data={{ ...resturantInfo, className: 'menu-card' }} />
        <div className='card menu-card'>
          <h3 className='text-bold'>Menu</h3>
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
