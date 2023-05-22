import { CROUSEL_URL, getDummyImg } from '../constant'

const Crousel = ({ cards }) => {
  return (
    <div className='crousel d-flex'>
      {cards.map((card, index) => (
        <div className='card crousel-card' key={card?.data?.bannerId || index}>
          <img
            className='card-img-top'
            src={
              (card?.data?.creativeId &&
                `${CROUSEL_URL}${card.data.creativeId}`) ||
              getDummyImg('520x520')
            }
          />
        </div>
      ))}
    </div>
  )
}
export default Crousel
