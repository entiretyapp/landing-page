import styled from "styled-components"

export const Form = styled.form``

export const Email = styled.input`
  width: 250px;
  height: 3rem;
  border-radius: 4px;
  outline: none;
  border: none;
  white-space: nowrap;
  font-weight: 600;
  padding: 1rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  margin-right: 0.25rem;
`

export const Submit = styled.button`
  width: 125px;
  height: 3rem;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  background: #f6d51a;
  outline: none;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  :hover {
    background: #dab300;
    transition: all 0.3s ease-out;
  }
`
