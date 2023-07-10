import { render, waitFor, fireEvent } from '@testing-library/react'
import Body from '../Body'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { StaticRouter } from 'react-router-dom/server'
import { resdata } from '../../../mocks/resdata'

//mock func
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(resdata)
  })
})
// test('should load shimmer', async () => {
//   const component = (
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   )
//   const body = render(component)
//   // await waitFor(() => expect(body.getByTestId('search-btn')))
//   const shimmer = body.getByTestId('shimmer')
//   expect(shimmer.children.length).toBe(10)
// })

test('should load restaurant list', async () => {
  const component = (
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )
  const body = render(component)
  await waitFor(() => expect(body.getByTestId('res-list')))
  const resList = body.getByTestId('res-list')
  console.log(resList.children[0])
  // expect(resList.children.length).toBe(10)
})

// test('searching restaurant', async () => {
//   const component = (
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   )
//   const body = render(component)
//   await waitFor(() => expect(body.getByTestId('search-btn')))
//   const searchInput = body.getByTestId('search-input')
//   const searchBtn = body.getByTestId('search-btn')
//   const resList = body.getByTestId('res-list')

//   fireEvent.change(searchInput, {
//     target: {
//       value: 'food'
//     }
//   })
//   fireEvent.click(searchBtn)
//   expect(resList.children.length).toBe(2)
// })
