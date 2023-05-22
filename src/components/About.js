import { useEffect } from 'react'
import Profile from './Profile'

const About = () => {
  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log('op')
    // }, 1000)
    return () => {
      // clearInterval(timer)
      console.log('unmount')
    }
  }, [])
  return (
    <div className='about'>
      <h1>This is about us</h1>
      {/* <Profile /> */}
    </div>
  )
}
export default About
