import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

interface SocialLinkProps {
  className?: string
}

export function ResumeLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://drive.google.com/file/d/14t43RgL1h8uRC6HWQSto6e86uEKhmT4M/view'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={'View Noel\'s resume'}
      className={className}
    >
      Resume
    </motion.a>
  )
}

export function GithubLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://github.com/noel-lopez'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={'Go to Noel\'s GitHub'}
      className={className}
    >
      <FaGithub />
    </motion.a>
  )
}

export function LinkedinLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://linkedin.com/in/nlopezmo'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Connect with Noel on LinkedIn'
      className={className}
    >
      <FaLinkedin />
    </motion.a>
  )
}

export function TwitterLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://twitter.com/noeldev_'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Follow Noel on Twitter'
      className={className}
    >
      <FaTwitter />
    </motion.a>
  )
}

export function MailLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='mailto:nlopez.publi@gmail.com'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Send Noel an email'
      className={className}
    >
      <IoIosMail style={{ transform: 'scale(1.2)' }} />
    </motion.a>
  )
}
