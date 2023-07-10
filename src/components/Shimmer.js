import ResCard from './ResCard'

const Shimmer = () => {
  return (
    <div className='shimmer res-list d-flex' data-testid='shimmer'>
      {Array(10)
        .fill('')
        .map((res, index) => (
          <ResCard data={{ ...res?.data, className: 'res-card' }} key={index} />
        ))}
    </div>
  )
}
export default Shimmer
