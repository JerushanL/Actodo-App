import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Signup(props) {

    const [signName, setSigninName] = useState("")
    const [createPassword, setCreatePassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

   //validate passwords
    const[isUserNameValid,setUserNameValid] = useState(false)
    const[isPasswordValid,setPasswordValid] = useState(false)
    const[passwordMatch,setPasswordMatch] = useState(false)

    const { users, setUsers } = props

    // const [users,setUsers] =useState(
    //     [    {
    //             username: "jeru",
    //             password:"123"
    //         }]
    //     )

    function handleSigninName(event) {
        
        setSigninName(event.target.value)
        setUserNameValid(event.target.value.length >= 4)
    }

    function handlecreatePassword(eve) {
        setCreatePassword(eve.target.value)
        setPasswordValid(eve.target.value.length >= 5)


    }
    function handleConfirmPassword(eve) {
        setConfirmPassword(eve.target.value)
        setPasswordMatch(eve.target.value === createPassword)

    }

    function handleSignUp(e) {
        e.preventDefault()

        // Regular expression for validation
        let uNameRegex = /^[a-zA-Z][a-zA-Z0-9]{4,}$/
        let passwordRegex = /^[a-zA-Z0-9]{5,}$/


        if (signName.length === "" || createPassword === "" || confirmPassword === "") {
            console.log("cannot signup");
            setUserNameValid(false)
            return;
        } else {
            setUserNameValid(true)  
        }


        if (!uNameRegex.test(signName)) {
            console.log("Username must contain atleast 5 characters")
            setUserNameValid(false)
            return;
        } else {
            setUserNameValid(true)
        }

        
        if (!passwordRegex.test(createPassword)) {
            setPasswordValid(false)
            return;
        }else {
            setPasswordValid(true)
        }

        if (createPassword !== confirmPassword) {
            console.log("Both Passwords don't match")
            return;
        }

        
        console.log("Sign in successful")
        setUsers([...users, { username: signName, password: createPassword }]);
        console.log(users)
        navigate('/')


    }

    return (
        <div className=" p-6 sm:p-10 ">
            <div className="bg-white p-10 border rounded">
                <h1 className="text-3xl font-semibold ">Hey Hi </h1>
                <p className=" ">Please Sign up for Manage your Activities.</p>


                <input type="text" placeholder="username" className="border border-gray-500 rounded p-2 mt-3 w-60 outline-none" onChange={handleSigninName} required />
                {isUserNameValid ? <li className="pt-2 text-green-500">Username must contain atleast 4 characters</li> : <li className="pt-2 text-red-500">Username must contain atleast 4 characters</li>}
                

                <br />
                <input type="password" placeholder="create password" className="border border-gray-500 rounded p-2 -mt-4  w-60 outline-none" onChange={handlecreatePassword} required />
               {isPasswordValid? <li className="pt-2  text-green-500">Password must contain atleast 5 characters</li>: <li className="pt-2  text-red-500">Password must contain atleast 5 characters</li>}

                <br />
                <input type="password" placeholder="confirm password" className="border border-gray-500 rounded p-2 -mt-4 w-60 outline-none" onChange={handleConfirmPassword} required />
                {passwordMatch? <li className="pt-2 text-green-500">Both passwords must  match</li>:<li className="pt-2 text-red-500">Both passwords must  match</li>}
                <br />

                <button className=" rounded-md text-white bg-[#2d327c] py-2 px-10 mt-3 " onClick={handleSignUp}>Sign Up</button>

                <p className="mt-2">Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
                
            </div>
        </div>
    )
}

export default Signup