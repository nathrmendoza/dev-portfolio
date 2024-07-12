import { useNavigate, useLocation } from "react-router-dom"

const customNavigation = () => {
  
    const navigate = useNavigate();
    const location = useLocation();

    //this is only done due to page transition differences
    const handleNavigate = (to) => {
        navigate(to, {state: {from: location.pathname }})
    }
    
    return handleNavigate
}

export default customNavigation