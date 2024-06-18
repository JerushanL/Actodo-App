import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(props){
    const navigate = useNavigate()
    const [enteredUName,setEnteredUName] = useState("")
    const [enteredpassword,setEnteredPassword] = useState("")
    const [registeredUser,setRegisteredUser] = useState(true)

    const {users}= props
    // const [users,setUsers] =useState(
    //     [    {
    //             username: "jeru",
    //             password:"123"
    //         }]
    //     )

    function handleUInput(eve){
        setEnteredUName(eve.target.value)
    }
    
    function handlePInput(event){
        setEnteredPassword(event.target.value)
    }

    function checkUser(){
        var userFound = false
        

        users.forEach( function(item) {
            if (item.username === enteredUName && item.password === enteredpassword) {
                console.log("Login Success")
                userFound = true
                navigate('/landing',{state:{username:enteredUName}})
            }
        });
        
        if (userFound === false ){
            console.log("Login Failed")
            setRegisteredUser(false)
         }
         setEnteredUName("")
         setEnteredPassword("")
    }
    return(

            <div className=" p-4 sm:p-10 w-[370px] sm:w-[550px]">
            <div className="bg-white p-12 border rounded h-[400px] ">
                <h1 className="text-3xl font-semibold ">Hey Hi </h1>
                {registeredUser?  <p>Please login to manage your Activities.</p>:<p className="text-red-500">Please Sign up before you <br />Log in !</p> }
                
                <input type="text" placeholder="username" className="border border-gray-500 rounded p-2 mt-3 w-60 outline-none" onChange={handleUInput}/> <br />
                <input type="password" placeholder="password" className="border border-gray-500 rounded p-2 mt-3 w-60 outline-none" onChange={handlePInput}/>
                <br />
                <button className=" rounded-md text-white bg-[#1f7bf2] py-2 px-10 mt-3 "
                       onClick={checkUser} >Login</button>
                <p className="mt-2">Don't have an account ? <Link to={'/signup'}className="underline" >Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login