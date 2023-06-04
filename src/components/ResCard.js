import { Link } from 'react-router-dom'
import { IMG_URL, getDummyImg } from '../constant'

const transform = data => {
  return (
    (data?.costForTwoString || data.costForTwoMessage) +
    ' | ' +
    (data.area || data.areaName) +
    ' | ' +
    (data.lastMileTravelString || data.sla.lastMileTravelString)
  )
}

const Card = data => {
  return (
    <div
      className={`card ${data?.className} shadow-lg hover:border-pink-400 border-8`}
    >
      <img
        className='card-img-top'
        alt={data?.name}
        src={
          (data?.cloudinaryImageId && `${IMG_URL}${data?.cloudinaryImageId}`) ||
          getDummyImg('298x187')
        }
      />

      <div className='card-body'>
        <h5 className='text-lg h-12'>
          {data?.name || <div className='dummy'></div>}
        </h5>
        <div className='text-xs font-medium h-12 py-2'>
          {data?.cuisines?.join(', ') || <div className='dummy'></div>}
        </div>
        <div className='text-sm font-medium pb-2'>
          <span
            className={`badge bg-${
              data?.avgRating > 3.9 ? 'success' : 'secondary'
            }`}
          >
            {(data?.avgRating && (
              <span>
                {data.avgRating}
                &nbsp;&#9733;
              </span>
            )) || <div className='dummy d-short'></div>}
          </span>
        </div>
        <div className='text-xs font-medium py-2'>
          {(data?.id && transform(data)) || (
            <div className='dummy d-half'></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ResCard ({ data }) {
  return (
    <>
      {data?.className === 'menu-card' ? (
        <Card {...data} />
      ) : (
        <Link to={`/resturant/${data?.id}`} className='link link-comp'>
          <Card {...data} />
        </Link>
      )}
    </>
  )
}
