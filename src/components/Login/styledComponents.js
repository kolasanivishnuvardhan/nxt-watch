// styledComponents.js
import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
`

export const LoginFormContainer = styled.div`
  width: 30%;
  background-color: ${({dark}) => (dark ? '#231f20' : '#ffffff')};
  box-shadow: 0px 0px 10px 0px #909090;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border: solid 2px ${({dark}) => (dark ? '#231f20' : '#ffffff')};
  border-radius: 8px;
`

export const Logo = styled.img`
  width: 40%;
`

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`

export const InputContainer = styled.div`
  margin: 5px 0;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #909090;
  font-size: 13px;
  font-weight: 450;
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 170%;
  border: solid 1px #d7dfe9;
  padding: 9px 5px 9px 15px;
  border-radius: 4px;
  outline: none;
  margin-top: 3px;
`

export const ShowPasswordContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  outline: none;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 3px;
  color: ${({dark}) => (dark ? '#ffffff' : 'inherit')};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: solid 1px #3b82f6;
  padding: 10px;
  font-family: 'Roboto';
  color: #ffffff;
  width: 95%;
`

export const ErrorMsg = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 2px;
`
