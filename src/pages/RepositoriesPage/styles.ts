import styled from 'styled-components';

// Breakpoints
/*
  xs -> 0
  sm -> 576px
  md -> 768px
  lg -> 992px
  xl -> 1200px
  xxl -> 1400px
*/

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: #2d2d2d;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  padding: 40px;

  @media screen and (max-width: 768px) {
    height: 100%
  }

  @media screen and (max-width: 576px) {
    padding: 40px 20px;
  }
`;