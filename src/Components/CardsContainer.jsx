import Card from './Cards';

function CardsContainer() {
    return (
        <div className='flex  justify-between gap-1 my-3 flex-wrap '>
            <Card bg={"#8272da"} title={"20"} subtitle={"Laval"}></Card>
            <Card bg={"#4bc487"} title={"June"} subtitle={"10.15.21"}></Card>
            <Card bg={"#588ff5"} title={"Build Using"} subtitle={" React"}></Card>
        </div>
    )
}
export default CardsContainer