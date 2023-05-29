import { useEffect, useState } from 'react'

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    window.addEventListener('online', cb)
    window.addEventListener('offline', cb)
    //code cleanup/ unmounting
    return () => {
      window.removeEventListener('online', cb)
      window.removeEventListener('offline', cb)
    }
  }, [])

  const cb = e => {
    e?.type === 'online' ? setIsOnline(true) : setIsOnline(false)
  }

  return isOnline
}
export default useOnline
