import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 97vh;
  background: linear-gradient(to right, #e3edf7, #f5f7fa);
`

export const LoginCard = styled.form`
  background: #fff;
  padding: 3rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
  width: 80%;
  max-width: 400px;
`

export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #2d3e50;
  text-align: center;
`

export const Input = styled.input`
  width: 80%;
  padding: 0.9rem 1rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4a90e2;
  }
`

export const Button = styled.button`
  width: 88%;
  padding: 0.9rem 1rem;
  background-color: #4a90e2;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #357abd;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.95rem;
  margin-top: 1rem;
  text-align: center;
  min-height: 1.2rem; 
`

