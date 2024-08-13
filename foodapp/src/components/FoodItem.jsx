import styles from "./foodItem.module.css"
export default function FoodItem({setFoodId,food}) {
    return <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} />
        <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
            <button onClick={()=>{
                console.log(food.id)
                setFoodId(food.id)
            }} 
            className={styles.itemButton}>View Recipe</button>
        </div>
    </div>
}