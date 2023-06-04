import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Footer = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='p-1 mb-4 mt-4 text-bold border border-gray-800'>
      <h5 className='text-bold'>Footer</h5>
      <p className='text-sm'>
        made by ❤️ {user.name} - {user.email}
      </p>
    </div>
  )
}
export default Footer
