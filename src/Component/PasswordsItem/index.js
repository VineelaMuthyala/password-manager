import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  onClickDelete = () => {
    const {passwordDetails, deleteItem} = this.props
    const {id} = passwordDetails
    deleteItem(id)
  }

  passwordsDisplay = () => {
    const {passwordDetails, showPassword, noPassword} = this.props
    const {website, username, password, initialColor} = passwordDetails

    if (noPassword === false) {
      return (
        <div>
          <img
            className="no-password-image"
            alt="no password"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <h1 className="no-passwords-heading">No Passwords</h1>
        </div>
      )
    }
    return (
      <li>
        <div className="password-item-container">
          <div className={initialColor}>{username[0]}</div>
          <div className="website-password-container">
            <p className="text">{website}</p>
            <p className="text">{username}</p>
            {showPassword ? (
              <p className="text">{password}</p>
            ) : (
              <img
                className="stars"
                alt="stars"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              />
            )}
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={this.onClickDelete}
          >
            <img
              className="delete-icon"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            />
          </button>
        </div>
      </li>
    )
  }

  render() {
    return <div>{this.passwordsDisplay()}</div>
  }
}
export default PasswordItem
