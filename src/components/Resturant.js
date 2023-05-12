import { useParams } from 'react-router-dom'

const Resturant = () => {
  const { id } = useParams()
  return (
    <div className='resturant'>
      <h1>Resturant Menu id: {id}</h1>
    </div>
  )
}
export default Resturant
