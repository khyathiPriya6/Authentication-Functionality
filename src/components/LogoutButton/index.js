import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const deleteCookie = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button className="btn-style" onClick={deleteCookie} type="submit">
        LogOut
      </button>
    </>
  )
}
export default withRouter(LogoutButton)
