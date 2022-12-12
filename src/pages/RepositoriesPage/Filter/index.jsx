import { Container, Selector, Cleaner } from './styles'
import PropTypes from 'prop-types'

const Filter = ({ languages, currentLanguage, onClick, onClickClearFilter }) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return (
    <Container>
      {selectors}
      <Cleaner onClick={onClickClearFilter}>Limpar</Cleaner>
    </Container>
  )
}

Filter.defaultProps = {
  currentLanguage: null,
  onClicl: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
  onClickClearFilter: PropTypes.func,
}

export default Filter
