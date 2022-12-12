/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'

const Profile = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
        <Inner>
          <Data>
            <MdGroup size={20} />{' '}
            <i>
              {user.followers} seguidos &middot; {user.following} seguindo
            </i>
          </Data>
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
          {user.location && (
            <Data>
              <MdLocationCity size={20} /> {user.location}
            </Data>
          )}
          {user.blog && (
            <Data>
              <MdLink size={20} /> <a href='https://github.com/Dynylson'>GitHub</a>
            </Data>
          )}
        </Inner>
      </Header>
    </Container>
  )
}

Profile.PropTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
}

export default Profile
