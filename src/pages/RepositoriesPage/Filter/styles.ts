import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2d2d2d;
  color: ${(props) => props.color || '#fff'};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
    background: ${(props) => props.color || '#ecf0f1'};
    color: ${(props) => (props.color ? props.theme.colors.white : props.theme.colors.black)};
    transform: translateX(5px) scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`

export const Cleaner = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  padding: 1rem;
  text-align: left;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  @media screen and (max-width: '768px') {
    text-align: center;
    padding: 0 1rem;
  }
`