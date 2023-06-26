import plantList from '../datas/plantList'



function ShoppingList(){
    let categories = []
    plantList.forEach(element => {
        if(!categories.includes(element.category)){
            categories.push(element.category)
        }
    })
    return (
        <ul>
            {categories.map((category) =>(
                <li key={"cat-" + category}>{category}</li>
            ))}
        </ul>
    )
}

export default ShoppingList

//loop throught array, check if category is created, 
    //if not, creates it
    //Add product to it
    //Else if category is created add product to it
    //pass to the next element

//loop a second time in the array
    //check category
    //assign product to category
    

    