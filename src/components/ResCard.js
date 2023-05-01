import React from 'react'
import { IMG_URL } from '../constant'
export default function ResCard ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime
}) {
  return (
    <div className='card res-card'>
      <img
        className='card-img-top'
        alt={name}
        src={`${IMG_URL}${cloudinaryImageId}`}
        width={'254px'}
      />
      <div className='card-body'>
        <h5 className='res-name text-format'>{name}</h5>
        <div className='res-cuisines text-format'>{cuisines.join(', ')}</div>
        <div className='res-rating text-format'>
          <i className='bi bi-star-fill'></i>
          <span
            className={`badge bg-${avgRating > 3.9 ? 'success' : 'secondary'}`}
          >
            {avgRating}
          </span>
        </div>
        <div className='res-cost text-format'>
          {`₹ ${costForTwo / 100} FOR TWO`} | {deliveryTime} MINS
        </div>
      </div>
    </div>
  )
}
