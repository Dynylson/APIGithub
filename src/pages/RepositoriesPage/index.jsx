import { ProfileContextProvider } from '../../contexts/ProfileContext'
import Filter from './Filter'
import Profile from './Profile'
import Repositories from './Repositories'

import { Container, Sidebar, Main } from './styles'

const RepositoriesPage = () => {
  const user = {
    login: 'Dynylson',
    name: 'Dynylson Junior',
    avatar_url: 'https://avatars.githubusercontent.com/u/94336147?v=4',
    followers: 9,
    following: 18,
    company: 'ETE - PE',
    blog: '',
    location: 'Brazil',
  }

  return (
    <Container>
      <Sidebar>
        <ProfileContextProvider>
          <Profile user={user} />
        </ProfileContextProvider>
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
