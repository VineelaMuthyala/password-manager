import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  onClickDelete = () => {
    const {passwordDetails, deleteItem} = this.props
    const {id} = passwordDetails
    deleteItem(id)
  }

  render() {
    const {passwordDetails, showPassword} = this.props
    const {website, username, password, initialColor} = passwordDetails

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
          <div className="delete-button-container">
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
        </div>
      </li>
    )
  }
}
export default PasswordItem
