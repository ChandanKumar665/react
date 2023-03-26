const h1 = React.createElement(
  'h1',
  { id: 'head', xyz: 'zzz' },
  'Hello World from react'
) //returns react element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(h1) //accepts react element
