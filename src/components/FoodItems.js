import { IMG_URL, getDummyImg, getFoodSymbol } from '../constant'

const FoodItems = ({
  name,
  price,
  imageId,
  description,
  isVeg,
  defaultPrice,
  id,
  removeItem
}) => {
  return (
    <div className='border-2 border-gray-500 p-2 flex mb-1 shadow-sm'>
      <div className='col-lg-2'>
        <img
          className='h-36'
          alt={name}
          src={(imageId && `${IMG_URL}${imageId}`) || getDummyImg('298x187')}
        />
      </div>
      <div className='px-2 col-lg-7'>
        <img src={getFoodSymbol(isVeg, 16)} />
        <h5 className='text-sm'>{name || ''}</h5>
        <h5 className='text-sm'>₹{(price || defaultPrice) / 100 || 0}</h5>
        <h5 className='text-xs text-gray-400 justify-normal'>{description}</h5>
      </div>
      <div className='px-2 col-lg-3 text-right pt-12'>
        <button
          onClick={e => removeItem(id)}
          className='border-2 border-slate-400 text-red-700 hover:bg-red-50 hover:shadow-md text-sm py-2 px-4 mb-2'
        >
          Remove
        </button>
      </div>
    </div>
  )
}
export default FoodItems
