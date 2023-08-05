import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md'

function CoverPage () {
  return (
    <div className='after-animation'>
      <nav>
        <div className='space-between'>
          <div className='logo'>NL</div>
          <ul className='nav-list'>
            <li>
              <a
                href='https://drive.google.com/file/d/1t8DkmUUFHiljdLcDEo8QpIBSz7J0hGWl/view'
                target='_blank' rel='noreferrer'
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href='https://github.com/noel-lopez'
                target='_blank'
                className='nav-icon' rel='noreferrer'
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/nlopezmo/'
                target='_blank'
                className='nav-icon' rel='noreferrer'
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className='cta'>
          <h1 className='title'>
            I create <span className='playful'>playful</span> experiences.
          </h1>
          <img src='/images/pfp.png' alt='My pfp' className='pfp-image' />
        </div>
        <h3 className='job-title'>Noel Lopez / Software Developer</h3>
        <button className='scroll-indicator'>
          <span>Projects</span>
          <ArrowDownIcon />
        </button>
      </main>
    </div>
  )
}

export default CoverPage
