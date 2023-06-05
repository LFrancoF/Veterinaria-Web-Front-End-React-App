import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="wrapper">
      <Header />

      <Sidebar />

      <div className="content-wrapper">
        <Outlet/>
      </div>

      <Footer />
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default App
