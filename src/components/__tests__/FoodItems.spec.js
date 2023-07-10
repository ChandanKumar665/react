import { render, waitFor, fireEvent } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { StaticRouter } from 'react-router-dom/server'
import { BRAND_LOGO } from '../../constant'
import FoodItems from '../FoodItems'

test('searching restaurant', async () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <FoodItems />
      </Provider>
    </StaticRouter>
  )
  const body = render(component)
  // await waitFor(() => expect(body.getByTestId('menu')))
  // const addBtn = body.getAllByTestId('add-btn')
  // const cart = body.getByTestId('cart')
  // fireEvent.click(addBtn[0])
  // expect(cart.innerHTML).toBe('Cart&nbsp; 1')
})
