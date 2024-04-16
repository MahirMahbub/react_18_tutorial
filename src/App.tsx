// import ListGroup from "./components/ListGroup.tsx";
// import  {useState} from "react";
// import GameButton from "./components/GameButton.tsx";
// import PizzaButton from "./components/PizzaButton.tsx";
import {ProductList} from "./components/ProductList.tsx";
// import Alert from "./components/Alert.tsx";

// function App() {
// const App = () => {
//     const items: string[] = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston',];
//     const heading: string = 'Cities';
//     const onSelectItem: (item: string, index: number) => void = (item: string, index: number): void => {
//         console.log('Selected city:', index + 1, ": ", item)
//     };
//     return (<div>
//         <ListGroup items={items} heading={heading} onSelectItem={onSelectItem}/>
//         {/*<Alert/>*/}
//     </div>);
// }

// const App = () => {
//     return (
//         <div>
//             {/*<Alert message={"Hello World"} type={'success'}/>*/}
//             <Alert type={'success'}>
//                 Hello <b>World</b>
//             </Alert>
//         </div>
//     );
// }

// const App = () => {
//     return (
//         <div>
//             <Button onClick={() =>
//                 console.log('Button clicked')
//             } color='warning'
//             >
//                 My Button
//             </Button>
//         </div>
//     );
// }

// const App = () => {
//     const [isClickedButton, setIsClickedButton] = useState(false);
//     return (
//         <div>
//
//             {isClickedButton && <ButtonAlert onClose={()=> setIsClickedButton(false)} children={'Button Clicked'}/>}
//             {/*<Alert type={'success'} children={'My Alert'}/>*/}
//             <Button onClick={() =>
//                 setIsClickedButton(true)
//             } color='warning'
//             >
//                 My Button
//             </Button>
//         </div>
//     );
// }

// const App = () => {
//     // const [firstName, setFirstName] = useState('');
//     // const [lastName, setLastName] = useState('');
//     const [person, setPerson] = useState({
//         firstName: '',
//         lastName: ''
//     })
//     const [isLoading, setIsLoading] = useState(false);
//     return (
//         <div>
//             {/*{firstName} {lastName}*/}
//             {person.firstName} {person.lastName}
//         </div>
//     )
// }

// const App = () => {
//     const [game, setGame] = useState({
//         id: 1,
//         player: {
//             name: 'John',
//         }
//     });
//     const onClick = () => {
//         setGame({
//             ...game,
//             player: {
//                 ...game.player,
//                 name: 'Jane'
//             }
//         });
//         console.log(game);
//     }
//
//     return (
//         <div>
//             <GameButton onClick={onClick} name={game.player.name}/>
//         </div>
//     )
// }

// const App = () => {
//     const [pizza, setPizza] = useState({
//         name: 'Spicy Pepperoni',
//         toppings: ['pepperoni', 'cheese', 'jalapenos']
//     });
//
//     const onClick = () => {
//         setPizza({...pizza, toppings: [...pizza.toppings, 'mushrooms']});
//         {console.log(pizza)}
//     }
//
//     return (
//         <div>
//             <PizzaButton onClick={onClick}/>
//
//         </div>
//     )
// }

// const App = () => {
//     const [selectedCategory, setSelectedCategory] = useState("All Items");
//     const [expenses, setExpenses] = useState([
//         {id: 1, description: 'Rent', amount: 1000, category: 'Housing'},
//         {id: 2, description: 'Current', amount: 1000, category: 'Electricity'},
//         {id: 3, description: 'Groceries', amount: 100, category: 'Food'},
//         {id: 4, description: 'Gas', amount: 40, category: 'Transportation'},
//         {id: 5, description: 'Fruits', amount: 50, category: 'Food'},
//     ]);
//
//     const visibleExpenses = selectedCategory!=="All Items" ? expenses.filter(e => e.category === selectedCategory) : expenses;
//     return (
//         <div>
//             <div className="mb-5">
//                 <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
//             </div>
//             <div className="mb-3">
//                 <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
//             </div>
//             <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e=> e.id !==id))}/>
//         </div>
//     );
// }
const App = () => {
    return (
        <div>
            <h1>Product Tracker</h1>
            <ProductList />
        </div>
    );
}
export default App;
