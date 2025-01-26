import React, {useState} from "react";


const ListOfItems = () => {
    /* const items = ["Apple", "Orange", "Banana"] */
    const [items, setItems] = useState(["apple, orange, banana"])
    const [newItem, setNewItem] = useState("")
    const addItem = () => {
        if(newItem.trim() !== ""){
            setItems([...items, newItem]);
            setNewItem("")
        }
    }
    const removeItem = (indexToRemove) => {
        setItems(items.filter((_, index)=> index !== indexToRemove))
    }
    return(
        <div>
              <h1>List of items:</h1>
              <ul>
              {items.map((item, index) => (
          <li key={index}>{item} <button onClick={()=> removeItem(index)}>Delite</button></li>
        ))}
              </ul>
              <input 
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter new item" />

                <button onClick={addItem}>Add</button>
            </div>
            
        
        
    )

}


export default ListOfItems;