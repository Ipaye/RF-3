import React, { Component } from 'react'

class AddUsers extends Component {
  static isDisabled = true

  state = {
    firstName: '',
    lastName: '',
    userName: '',
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  validateInputs = (_) => {
    const { firstName, lastName, userName } = this.state
    if (firstName === '' || lastName === '' || userName === '') {
      return true
    }
    return false
  }

  isUsernameValid = (username) => {
    const allUsers = this.props.users

    if (allUsers.length == 0) {
      return true
    } else {
      const user = allUsers.filter((user) => user.userName == username)
      if (user.length > 0) return false
    }

    return true
  }

  handleSubmit = (event) => {
    const { firstName, lastName, userName } = this.state

    event.preventDefault()

    const isEnteredUsernameValid = this.isUsernameValid(userName)

    if (isEnteredUsernameValid) {
      const userDetails = {
        firstName,
        lastName,
        userName,
        gamePlayed: 0,
      }
      this.props.addUser(userDetails)
    }
  }

  render() {
    const { firstName, lastName, userName } = this.state
    const isDisabled = this.validateInputs()

    return (
      <div className="add-users">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstName" onChange={this.handleChange} value={firstName} />
          </div>
          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastName" onChange={this.handleChange} value={lastName} />
          </div>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={userName} />
          </div>

          <button type="submit" disabled={isDisabled}>
            Add User
          </button>
        </form>
      </div>
    )
  }
}

export default AddUsers
