import { useState } from "react"
import TodoItem from "./Todoitem"

function Activities() {

    const [activityArr, setActivityArr] = useState([{ id: 1, activity: "Go for a Walk" }])

    const [newItem, setnewitem] = useState("")

    const handleChange = ((event) => {
        setnewitem(event.target.value)
    })

    const add = (event) => {
        if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
            event.preventDefault(); // Prevent default form submission
            if (newItem !== "") {
                setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newItem }]);
                setnewitem("")
            }
        }
    };




    return (
        <div className="flex justify-between gap-3 flex-wrap mt-5 ">
            <div className="flex flex-col gap-2">
                <h1 className="font-medium text-2xl">Manage Activities</h1>
                <div>
                    <input type="text" value={newItem} placeholder="Next activity?" className="p-2  border rounded-none border-gray-400 outline-none " onChange={handleChange} onKeyDown={add} /> 
                    <button className="bg-black text-white p-2 border rounded-none border-black ml-2 px-4" onClick={add}>Add</button>
                </div>

            </div>
            <div className="bg-[#eeabab] p-2  border rounded flex-grow w-full">
                <h1 className="font-medium text-2xl">Today's Activity</h1>
                <div className=" text-blue-900 font-bold  ">
                    {activityArr.length === 0 ? <p>You haven't added anything yet  </p> : <p>Here is your Activities</p>}
                </div>
                <ul>
                    {
                        activityArr.map((data) => {
                            let { id, activity } = data
                            return (
                                <TodoItem id={id} activity={activity}
                                    activityArr={activityArr} setActivityArr={setActivityArr}
                                ></TodoItem>

                            )
                        })
                    }
                </ul>

            </div>
        </div>


    )
}

export default Activities