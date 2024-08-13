import styles from "./foodDetail.module.css"
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
export default function FoodDetail({foodId}) {
    const [food,setFood]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="f8341d4a1afb41f5bc61650cea84cdf2"
    useEffect(()=>{
        async function fetchFood() {
            const res=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data=await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchFood()
    },[foodId])
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏲️{food.readyInMinutes} minutes</strong>
                    </span>
                    <span>
                        <strong>👨‍👩‍👧‍👦Serves : {food.servings}</strong>
                    </span>
                    <span><strong>{food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}</strong></span>
                    <span><strong>{food.vegan ? "🐄Vegan":""}</strong></span>
                </div>
                <div>
                    <span><strong>$ {food.pricePerServing} Per Serving</strong></span>
                </div>
                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading}/>
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? ( 
                            <p>Loading...</p>
                        ) : (
                        food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))
                    )}
                    </ol>
                </div>
            </div>
        </div>
)}