import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>A competition brews</h1>
      <h2> So far two contestants rank! Ezster with 2 points and Yvonne with 1!</h2>
      
      <p>This project is being built by Filipe with Next.JS</p>

    <footer>
      <p>Join in on the fun! Check <a href="https://github.com/FilipeFT/next-starter-jamstack2">my repository</a>!</p>
    </footer>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
