import Router from 'next/router'

const handleLinkClick = (event) => {
  event.preventDefault()
  const page = event.target.dataset.page
  Router.push(`/?page=${page}`, `/${page}`)
}

const ProjectList = () => (
  <div>
    <a
      href='/aurora'
      onClick={handleLinkClick}
      data-page='aurora'
    >
      Aurora
    </a>
  </div>
)

ProjectList.displayName = 'ProjectList'

export default ProjectList
