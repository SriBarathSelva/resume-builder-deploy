import Nav from "./Nav"
import "./Home.css"
import image from "./backgrd.jpeg"; 
const Home = () => {
  return (
    <>
    <div className="logo">
      <img src={image} alt="" width="50px" height="30px"/>
      <h1 className="logoname">Resume Builder</h1>
    </div>
    
    <div className="homeComp">
      <img src={image} alt="" width="700px" height="500px"/>
      <div>
        <div className="motto">
        <h2 className="mottomain">Create a standout resume effortlessly!</h2>
          <h4> Join the top 2% with our expert-designed templates that meet employer expectations. Quick, easy, and free to use—start building your professional future today!</h4>

        </div>
       
        <div className="container"><Nav /> </div>
    </div>
    </div>
    
    </>
  )
}

export default Home