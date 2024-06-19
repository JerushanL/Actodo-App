import { useState } from "react"

function TodoItem(props) {
    let { id, activity, activityArr, setActivityArr } = props

    const [isEditing, setEditing] = useState(false)          //////
    const [newActivity, setNewActivity] = useState(activity) //////

    const remove = ((removeid) => {

        var temarray = activityArr.filter((item) => item.id !== removeid)
        setActivityArr(temarray)
    })

    const handleInputChange = (e) => {///////////////////////////
        setNewActivity(e.target.value)///////////////////////////
    }

    const saveEdit = ((editId) => {
        let temarray = activityArr.map((item) => {///////////////////////////
            if (item.id === editId) {
                return { ...item, activity: newActivity }
            } return item;
        })
        setActivityArr(temarray)///////////////////////////
        setEditing(false)///////////////////////////
    })

    return (
        <div>
            <div className=" ">
                <div className="bg-blue-200 flex flex-col ">
                    {isEditing ? (<input type="text" value={newActivity} onChange={handleInputChange}  //////////////////
                        className="flex-1 break-words outline-black border border-none pl-1 " />) :///////////////
                        (<li className="break-words ">{id}. {activity}</li>)} 
                </div>
                <div className="bg-blue-200 mb-2  ">
                    {isEditing ? (
                        <button className="px-8 " onClick={() => {
                            saveEdit(id)
                            console.log("tr", id); // Log when edits are saved
                        }}>Save</button>
                    ) : (
                        <button className="px-8    " onClick={() => {
                            // Log when entering edit mode
                            setNewActivity(activity);
                            setEditing(true);
                        }}>Edit</button>
                    )}
                    <button onClick={(() => { remove(id) })} className="pr-3 text-red-600 mx-6">Delete</button>
                </div>
            </div>
        </div >
    )
}

export default TodoItem