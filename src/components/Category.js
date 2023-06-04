import {
  getDummyImg,
  IMG_URL,
  getFoodSymbol,
  showStarRatings,
  getRandomId
} from '../constant'
import { addItem } from '../store/slices/cartSlice'
import { useDispatch } from 'react-redux'

const MenuItem = ({
  name,
  price,
  description,
  imageId,
  isVeg,
  ratings,
  defaultPrice,
  handleClick,
  id
}) => {
  const handlerProps = {
    name,
    price,
    description,
    imageId,
    isVeg,
    ratings,
    defaultPrice,
    id
  }
  return (
    <div className='d-flex'>
      <div className='menu-item mi-left'>
        <ul>
          <li key={id}>
            <img src={getFoodSymbol(isVeg, 16)} />
            <div className='text-sm font-bold py-1'>
              {name || <div className='dummy'></div>}
            </div>
            <div className='text-sm font-semibold py-1'>
              {(price && `₹${price / 100}`) ||
                (defaultPrice && `₹${defaultPrice / 100}`) || (
                  <div className='dummy d-short'></div>
                )}
            </div>
            <div className='text-sm py-1'>
              {showStarRatings(ratings?.aggregatedRating?.rating) || (
                <div className='dummy'></div>
              )}
              &nbsp;({ratings?.aggregatedRating?.ratingCountV2 || 0})
            </div>
            <div className='text-sm py-1 text-gray-400'>{description}</div>
          </li>
        </ul>
      </div>
      <div className='menu-item mi-right'>
        <img
          className='card-img menu-item-img'
          src={(imageId && `${IMG_URL}${imageId}`) || getDummyImg('100x100')}
        />
        <div className='text-center'>
          <button
            onClick={e => handleClick(handlerProps)}
            className='border-2 border-slate-400 text-green-700 hover:shadow-md hover:bg-green-100 text-sm py-2 px-4 m-2'
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}

function transformData (categories = []) {
  let output = []
  for (let cat of categories) {
    output = [...output, ...cat.itemCards]
  }
  return output
}

const Category = ({ data }) => {
  const itemCards =
    data?.card?.itemCards ||
    (data?.card?.categories && transformData(data?.card?.categories)) ||
    data?.card?.carousel ||
    Array(2).fill({ card: '' })

  const dispatch = useDispatch()
  const handleItemAdd = item => {
    dispatch(addItem(item))
  }
  return (
    <>
      <div className={`${data.className}`}>
        <h5 className='text-lg py-1'>
          {data?.card?.title ? (
            `${data?.card?.title} (${itemCards.length})`
          ) : (
            <div className='dummy'></div>
          )}
        </h5>
        {itemCards.map((item, index) => (
          <MenuItem
            {...(item.card?.info || item.dish?.info)}
            key={item.card?.info?.id || `${index}_${getRandomId()}`}
            handleClick={handleItemAdd}
          />
        ))}
      </div>
      <hr></hr>
    </>
  )
}

export default Category
