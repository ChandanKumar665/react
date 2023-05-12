import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  const { status, statusText } = err
  return (
    <div className='container'>
      <h1>Something went wrong</h1>
      <p>{`${status} - ${statusText}`}</p>
    </div>
  )
}

export default Error
