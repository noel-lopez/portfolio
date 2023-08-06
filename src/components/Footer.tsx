import { ResumeLink, GithubLink, LinkedinLink, TwitterLink } from './SocialLinks'

function Footer (): JSX.Element {
  return (
    <footer>
      <h2>Connect with me</h2>
      <ul className='footer-links'>
        <li>
          <ResumeLink />
        </li>
        <li>
          <GithubLink />
        </li>
        <li>
          <LinkedinLink />
        </li>
        <li>
          <TwitterLink />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
