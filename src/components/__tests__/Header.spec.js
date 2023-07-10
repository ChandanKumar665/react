import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { StaticRouter } from 'react-router-dom/server'
import { BRAND_LOGO } from '../../constant'

test('should logo in Header', () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const header = render(component)
  const logo = header.getByTestId('logo')
  expect(logo.src).toBe(BRAND_LOGO)
})

test('should show online', () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const header = render(component)
  const isOnline = header.getByTestId('online')
  expect(isOnline.innerHTML).toBe('🟢')
})

test('should render cart count', () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const header = render(component)
  const cart = header.getByTestId('cart-items')
  expect(cart.innerHTML).toBe('Cart&nbsp;(0)')
})
