import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems'
import { clearCart, removeItem } from '../store/slices/cartSlice'

getTotalPrice = (list = []) => {
  return list.reduce(
    (acc, curr) => (acc += (+curr.price || +curr.defaultPrice) / 100),
    0
  )
}
const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch()
  const clear = () => {
    dispatch(clearCart())
  }
  const removeFood = id => {
    dispatch(removeItem(id))
  }
  return (
    <div className='mt-16'>
      <h3>Cart Items - {cartItems.length}</h3>
      <button
        onClick={clear}
        className='border-2 border-slate-400 text-red-700 hover:shadow-md text-sm py-2 px-4 mb-2'
      >
        Clear Cart
      </button>
      {cartItems.map(item => (
        <FoodItems {...item} key={item.id} removeItem={removeFood} />
      ))}
      <div className='border-2 text-lg font-bold p-2'>
        Total ₹{getTotalPrice(cartItems).toFixed(2)}
      </div>
    </div>
  )
}
export default Cart
