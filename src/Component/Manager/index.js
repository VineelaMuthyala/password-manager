import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordsItem'
import './index.css'

const initialBackgroundColorlist = [
  'purple',
  'orange',
  'green',
  'brown',
  'teal',
  'red',
  'light-blue',
]

class Manager extends Component {
  state = {
    userDetailsList: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    searchValue: '',
    noPassword: false,
  }

  addWebsite = event => {
    this.setState({website: event.target.value})
  }

  addUsername = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAddNewPassword = event => {
    event.preventDefault()
    const initialColor =
      initialBackgroundColorlist[
        Math.ceil(Math.random() * initialBackgroundColorlist.length - 1)
      ]
    const {username, website, password} = this.state
    const newUserDetails = {
      id: uuidv4(),
      website,
      username,
      password,
      initialColor,
    }
    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newUserDetails],
    }))
    this.setState({website: '', username: '', password: ''})
  }

  onClickshowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deleteItem = id => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(eachItem => eachItem.id !== id)
    this.setState({userDetailsList: filteredList})
  }

  searchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      userDetailsList,
      showPassword,
      searchValue,
      noPassword,
    } = this.state

    const searchResult = userDetailsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="password-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="input-output-container">
          <div className="container">
            <form className="add-password-container">
              <h1 className="add-password-heading">Add New Password</h1>
              <div className="input-text-container">
                <img
                  className="logos"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Website"
                  onChange={this.addWebsite}
                  value={website}
                />
              </div>
              <div className="input-text-container">
                <img
                  className="logos"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Username"
                  onChange={this.addUsername}
                  value={username}
                />
              </div>
              <div className="input-text-container">
                <img
                  className="logos"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  className="input-text"
                  placeholder="Enter Password"
                  onChange={this.addPassword}
                  value={password}
                />
              </div>
              <button
                className="add-button"
                type="submit"
                onClick={this.onClickAddNewPassword}
              >
                Add
              </button>
            </form>

            <img
              className="input-image"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            />
          </div>

          <div className="container output-container">
            <div className="header-container">
              <div className="password-count-container">
                <h1 className="your-password-heading">Your Passwords</h1>
                <p className="count-text">{userDetailsList.length}</p>
              </div>
              <div className="search-container">
                <img
                  className="search-icon"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  onChange={this.searchInput}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-password-container">
              <input
                className="check-box-input"
                type="checkbox"
                onClick={this.onClickshowPassword}
                id="input"
              />
              <label className="show-passwords-text" htmlFor="input">
                Show Passwords
              </label>
            </div>
            <ul className="unordered-list">
              {searchResult.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passwordDetails={eachItem}
                  showPassword={showPassword}
                  noPassword={noPassword}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Manager
