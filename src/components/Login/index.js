import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Context from '../../context'
import {
  LoginContainer,
  LoginFormContainer,
  Logo,
  LoginForm,
  InputContainer,
  Label,
  Input,
  ShowPasswordContainer,
  Checkbox,
  ShowPasswordLabel,
  ButtonContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password')
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  }

  renderErrorMsg = msg => {
    this.setState({errorMsg: msg, showErrorMsg: true})
  }

  renderOnSuccessfulLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickLoginBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.renderOnSuccessfulLogin(data.jwt_token)
    } else {
      this.renderErrorMsg(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => (
    <InputContainer>
      <Label htmlFor="username">USERNAME</Label>
      <br />
      <Input
        type="text"
        placeholder="Username"
        id="username"
        onChange={this.onChangeUsername}
      />
    </InputContainer>
  )

  renderPasswordField = lightTheme => (
    <InputContainer>
      <Label htmlFor="password">PASSWORD</Label>
      <br />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        onChange={this.onChangePassword}
      />
      <ShowPasswordContainer>
        <Checkbox
          type="checkbox"
          id="show-password"
          onChange={this.togglePasswordVisibility}
        />
        <ShowPasswordLabel htmlFor="show-password" dark={!lightTheme}>
          Show Password
        </ShowPasswordLabel>
      </ShowPasswordContainer>
    </InputContainer>
  )

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {showErrorMsg, errorMsg} = this.state
          const jwtToken = Cookies.get('jwt_token')

          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          const {lightTheme} = value

          return (
            <LoginContainer dark={!lightTheme}>
              <LoginFormContainer dark={!lightTheme}>
                <Logo
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onClickLoginBtn}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField(lightTheme)}
                  <ButtonContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    <br />
                    {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                  </ButtonContainer>
                </LoginForm>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
