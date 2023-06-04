import { useContext, useState } from 'react'
import UserContext from '../utils/UserContext'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='border border-lime-400 p-2 mb-2'>
      <h3 className=''>{title}</h3>
      {isVisible ? (
        <button
          onClick={e => {
            setIsVisible('')
          }}
          className='underline cursor-pointer'
        >
          Hide
        </button>
      ) : (
        <button
          onClick={e => {
            setIsVisible(title.split(' ')[0].toLowerCase())
          }}
          className='underline cursor-pointer'
        >
          Show
        </button>
      )}

      {isVisible && <p className='justify-end text-sm'>{description}</p>}
    </div>
  )
}

const Instamart = () => {
  const { user } = useContext(UserContext)
  const [visibleSection, setVisibleSection] = useState('about')
  return (
    <div className='my-16'>
      <h3 className='font-bold text-3xl p-2 m-2'> Instamart: {user.name}</h3>
      <Section
        title='About Instamart'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === 'about'}
        setIsVisible={text => setVisibleSection(text)}
      />
      <Section
        title='Team Instamart'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === 'team'}
        setIsVisible={text => setVisibleSection(text)}
      />
      <Section
        title='Career Instamart'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === 'career'}
        setIsVisible={text => setVisibleSection(text)}
      />
      <Section
        title='Contact Instamart'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === 'contact'}
        setIsVisible={text => setVisibleSection(text)}
      />
    </div>
  )
}
export default Instamart
