import styled from 'styled-components'

export const UserItemWrapper = styled.div`
  border-radius: 5px;
  padding: 1rem;
  border: 1px solid grey;
  margin-bottom: 2rem;
  & > p:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > p:last-child {
    color: green;
  }
`
