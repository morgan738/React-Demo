import React, {useEffect, useState} from 'react' 
import Topping from './Toppings'

// class ToppingList extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             selectedTopping: 'cheese'
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>The selected pizza topping is {this.state.selectedTopping}</h1>
//                 <ul>
//                     List goes here...
//                 </ul>
//             </div>
//         )
//     }
// }

const ToppingList = () => {
    
    const [selectedTopping, setSelectedTopping] = useState([])
    //const selectedTopping = useState(["state"])
    console.log("slected topping --> ", selectedTopping)
    const [displayedTopping, setDisplayedTopping] = useState('...')
    
    useEffect(() => {
        
        setSelectedTopping(['cheese', 'pineapple', 'bacon', 'Not honey','mushroom'])
    },[displayedTopping])


    return(
        
        <div>
            <h1>The selected pizza topping is {displayedTopping}</h1>
            
            <ul>
                {selectedTopping.map((topping) => {
                    return(<div key={topping}>
                        <Topping toppingName={topping} changeTopping={setDisplayedTopping} anythingIwant={{}}/>
                    </div>)
                })}

                
            </ul>
        </div>
    )
}

export default ToppingList