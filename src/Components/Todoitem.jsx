function TodoItem(props) {
    let {id,activity,activityArr,setActivityArr} = props
    
    const remove = ((removeid)=>{
        console.log("removed")
        var temarray = activityArr.filter((item)=> item.id !== removeid)
        setActivityArr(temarray)
    })

    return (
        <div>
            <div className="flex justify-between">
                <li>{id}. {activity} </li>
                <button onClick={(() => { remove(id) })} className="pr-3 text-red-600">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem