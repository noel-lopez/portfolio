import { motion } from 'framer-motion'
import { ProjectType, projectsList } from '../data/projects'

function ProjectList (): JSX.Element {
  return (
    <div className='projects-container'>
      {projectsList.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </div>
  )
}

function ProjectItem ({ project }: { project: ProjectType }): JSX.Element {
  const {
    name,
    description,
    image,
    codeUrl,
    demoUrl,
    tools
  } = project

  return (
    <div className='project' id={name}>
      <div className='project-container'>
        <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
          <picture>
            <img src={`/projectImages/${image}`} alt={name} className='project-image' />
          </picture>
        </a>
        <div className='project-info'>
          <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
            <h2>{name}</h2>
          </a>
          {description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <h3>Tools used:</h3>
          <ul className='tools-list'>
            {tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
          <motion.div className='project-btns'>
            {(demoUrl != null) && (
              <motion.a
                href={demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Open ${name} site`}
                className='project-btn'
              >
                Open Site
              </motion.a>
            )}
            {(codeUrl != null) && (
              <motion.a
                href={codeUrl}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`View ${name} code`}
                className='project-btn'
              >
                View Code
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
