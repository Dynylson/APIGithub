import Filter from './Filter'
import Profile from './Profile'
import Repositories from './Repositories'

import { Container, Sidebar, Main } from './styles'

const RepositoriesPage = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
