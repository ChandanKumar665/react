import {
  getDummyImg,
  IMG_URL,
  getFoodSymbol,
  showStarRatings,
  getRandomId
} from '../constant'

const MenuItem = ({
  name,
  price,
  description,
  imageId,
  isVeg,
  ratings,
  defaultPrice
}) => {
  return (
    <div className='d-flex'>
      <div className='menu-item mi-left'>
        <ul>
          <li>
            <img src={getFoodSymbol(isVeg, 16)} />
            <div className='menu-item-text text-format'>
              {name || <div className='dummy'></div>}
            </div>
            <div className='menu-item-text text-format'>
              {(price && `₹${price / 100}`) ||
                (defaultPrice && `₹${defaultPrice / 100}`) || (
                  <div className='dummy d-short'></div>
                )}
            </div>
            <div className='menu-item-text text-format'>
              {showStarRatings(ratings?.aggregatedRating?.rating) || (
                <div className='dummy'></div>
              )}
              &nbsp;({ratings?.aggregatedRating?.ratingCountV2 || 0})
            </div>
            <div className='menu-item-des text-format'>{description}</div>
          </li>
        </ul>
      </div>
      <div className='menu-item mi-right'>
        <img
          className='card-img menu-item-img'
          src={(imageId && `${IMG_URL}${imageId}`) || getDummyImg('100x100')}
        />
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
    Array(2).fill('')
  console.log(itemCards)
  return (
    <>
      <div className={`${data.className}`}>
        <h5 className='res-name text-format'>
          {data?.card?.title ? (
            `${data?.card?.title} (${itemCards.length})`
          ) : (
            <div className='dummy'></div>
          )}
        </h5>
        {itemCards.map(({ card }, index) => (
          <MenuItem
            {...card?.info}
            key={card?.info?.id || `${index}_${getRandomId()}`}
          />
        ))}
      </div>
      <hr></hr>
    </>
  )
}

export default Category
