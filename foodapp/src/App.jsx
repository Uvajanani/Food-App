import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import "./App.css"
import Container from "./components/Container"
import InnerConntainer from "./components/InnerContainer"
import FoodDetail from "./components/FoodDetail"
export default function App() {
  const [foodData,setFoodData]=useState([])
  const [foodId,setFoodId]=useState("658615")
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerConntainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerConntainer>
        <InnerConntainer>
          <FoodDetail foodId={foodId}/>
        </InnerConntainer>
        
      </Container>
      
    </div>
  )
}


