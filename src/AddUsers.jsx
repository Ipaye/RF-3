import React, { Component } from 'react'

class AddUsers extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    gamePlayed: '',
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    console.log('[name, value] ->', fieldName, fieldValue)

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  validateInputs = (_) => {
    const { firstName, lastName, userName } = this.state

    if (firstName == '' || lastName == '' || userName === '') return true
    return false
  }

  render() {
    const { firstName, lastName, userName } = this.state

    return (
      <div className="add-users">
        <form>
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

          <button type="submit" disabled={this.validateInputs}>
            Add User
          </button>
        </form>
      </div>
    )
  }
}

export default AddUsers
