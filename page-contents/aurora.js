import Head from 'next/head'
import ProjectBody from '../components/project-body'

const AuroraPageContent = () => (
  <div>
    <Head>
      <title>Aurora by Kyle Suss</title>
    </Head>

    <ProjectBody>
      <div>Aurora</div>
    </ProjectBody>
  </div>
)

AuroraPageContent.displayName = 'AuroraPageContent'

export default AuroraPageContent
