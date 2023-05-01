import { CROUSEL_URL } from '../constant'

const Crousel = ({ cards }) => {
  return (
    <div className='crousel d-flex'>
      {cards.map((card, index) => (
        <div className='card crousel-card' key={card.data.bannerId}>
          <img
            className='card-img-top'
            src={`${CROUSEL_URL}${card.data.creativeId}`}
          />
        </div>
      ))}
    </div>
  )
}
export default Crousel
