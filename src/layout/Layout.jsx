import styles from './layout.module.css'

function Layout({children}) {
  return (
    <div>
    <header>
        <h1>Crypto App</h1>
        <p>React JS Full Course</p>
    </header>
     {children}
    <footer>
        <h1>Made By ILYA</h1>
    </footer>
    </div>
  )
}

export default Layout