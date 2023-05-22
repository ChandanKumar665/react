import { Link } from 'react-router-dom'
import { IMG_URL, getDummyImg } from '../constant'

export default function ResCard ({ data }) {
  function transform (data) {
    return (
      (data?.costForTwoString || data.costForTwoMessage) +
      ' | ' +
      (data.area || data.areaName) +
      ' | ' +
      (data.lastMileTravelString || data.sla.lastMileTravelString)
    )
  }

  return (
    <Link to={`/resturant/${data?.id}`} className='link link-comp'>
      <div className={`card ${data?.className}`}>
        <img
          className='card-img-top'
          alt={data?.name}
          src={
            (data?.cloudinaryImageId &&
              `${IMG_URL}${data?.cloudinaryImageId}`) ||
            getDummyImg('298x187')
          }
        />

        <div className='card-body'>
          <h5 className='res-name text-format'>
            {data?.name || <div className='dummy'></div>}
          </h5>
          <div className='res-cuisines text-format'>
            {data?.cuisines?.join(', ') || <div className='dummy'></div>}
          </div>
          <div className='res-rating text-format'>
            <i className='bi bi-star-fill'></i>
            <span
              className={`badge bg-${
                data?.avgRating > 3.9 ? 'success' : 'secondary'
              }`}
            >
              {data?.avgRating || <div className='dummy d-short'></div>}
            </span>
          </div>
          <div className='res-cost text-format'>
            {(data?.id && transform(data)) || (
              <div className='dummy d-half'></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
