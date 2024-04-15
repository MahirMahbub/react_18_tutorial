// import ListGroup from "./components/ListGroup.tsx";
// import  {useState} from "react";
// import GameButton from "./components/GameButton.tsx";
// import PizzaButton from "./components/PizzaButton.tsx";
import Form from "./components/Form.tsx";
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

const App = () => {
    return (
        <div>
            <Form/>
        </div>
    );
}
export default App;
