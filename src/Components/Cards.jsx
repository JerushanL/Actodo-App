
  
function Card(props) {
    
    return (

        <div style={{ backgroundColor: props.bg }} className=' text-center py-2 px-10 border rounded min-w-[200px] flex-grow'>
            <h1 className='font-medium text-2xl'>{props.title}</h1>
            <p className='text-xl'>{props.subtitle}</p>
        </div>

    )
}

export default Card