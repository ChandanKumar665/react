import React from 'react'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    console.log('child constructor')
    this.state = { count: 0 }
  }
  async componentDidMount () {
    console.log('child - componentDidMount')
    this.setState({ count: 1 })
  }
  componentDidUpdate () {
    console.log('child - componentDidUpdate')
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    console.log('render')
    return <div>Profile Page count: {this.state.count}</div>
  }
}

export default Profile
