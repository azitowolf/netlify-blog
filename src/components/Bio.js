import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Alex Zito-Wolf</strong> who lives and works in Boston 
          trying to understand how to give the most value to clients.{' '}
          <a href="https://twitter.com/azitowolf">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
