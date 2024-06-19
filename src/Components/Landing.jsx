import Header from './Header';
import Activities from './Activities';
import CardsContainer from './CardsContainer';
function Landing(){

    return (
        <div className=" p-4  ">
        <div className="bg-[#f1f0f0] p-6 border rounded-md ">
          <Header></Header>
          <CardsContainer></CardsContainer>
          <Activities></Activities>
        </div>
      </div>
    )
}

export default Landing