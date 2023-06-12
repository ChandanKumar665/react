import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { StaticRouter } from 'react-router-dom/server'

test('should logo in Header', () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const header = render(component)
  const logo = header.getAllByTestId('logo')
  console.log(logo)
})
