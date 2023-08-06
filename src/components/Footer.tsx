import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer (): JSX.Element {
  return (
    <footer>
      <h2>Connect with me</h2>
      <ul className='footer-links'>
        <li>
          <motion.a
            href='https://drive.google.com/file/d/1t8DkmUUFHiljdLcDEo8QpIBSz7J0hGWl/view'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={'View Noel\'s resume'}
          >
            Resume
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://github.com/noel-lopez'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={'Go to Noel\'s GitHub'}
          >
            <FaGithub />
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://linkedin.com/in/nlopezmo'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title='Connect with Noel on LinkedIn'
          >
            <FaLinkedin />
          </motion.a>
        </li>
        <li>
          <motion.a
            href='https://twitter.com/noeldev_'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title='Follow Noel on Twitter'
          >
            <FaTwitter />
          </motion.a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
