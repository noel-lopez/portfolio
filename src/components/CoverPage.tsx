import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md'
import Header from './Header'

interface Props {
  scrollToProjects: () => void
}

function CoverPage ({ scrollToProjects }: Props): JSX.Element {
  return (
    <div className='after-animation'>
      <Header />
      <main>
        <div className='cta'>
          <h1 className='title'>
            I create <span className='playful'>playful</span> experiences.
          </h1>
          <div className='pfp-container'>
            <img src='/images/pfp.webp' alt='My pfp' className='pfp-image' />
            <img src='/images/pfp-color.webp' alt='My pfp' className='pfp-image color-image' />
          </div>
        </div>
        <h3 className='job-title'>Noel Lopez / Software Developer</h3>
        <button className='scroll-indicator' onClick={scrollToProjects}>
          <span>Projects</span>
          <ArrowDownIcon />
        </button>
      </main>
    </div>
  )
}

export default CoverPage
