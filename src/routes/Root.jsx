import Header from "../components/Header"
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

const Root = ({toggleTheme, currentTheme}) => {

    return (
        <>
            <Header toggleThemeFunc={toggleTheme} themeColor={currentTheme} />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root