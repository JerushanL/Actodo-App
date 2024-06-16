import { useLocation } from "react-router-dom"
function Header() {
    const location = useLocation()
    
    console.log(location.state.username)  
    const name = location.state.username
    console.log(name) 


    return (
        <div>
            <h1 className="font-medium text-3xl">Hello {name.toUpperCase()}</h1>
            
            <p className="text-xl">I help you to manage your activities <span className="text-yellow-500 ">:)</span></p>
        </div>
    )

}

export default Header