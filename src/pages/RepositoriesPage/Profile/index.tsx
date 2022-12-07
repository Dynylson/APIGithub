import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/94336147?v=4' />
        <Login>Dynylson Junior</Login>
        <Name>Dynylson</Name>
        <Inner>
          <Data>
            <MdGroup size={20} /> <i>30 seguidos &middot; 10 seguindo</i>
          </Data>
          <Data>
            <MdWork size={20} /> ETE
          </Data>
          <Data>
            <MdLocationCity size={20} /> Garanhuns
          </Data>
          <Data>
            <MdLink size={20} /> <a href='https://github.com/Dynylson'>GitHub</a>
          </Data>
        </Inner>
      </Header>
    </Container>
  )
}

export default Profile
