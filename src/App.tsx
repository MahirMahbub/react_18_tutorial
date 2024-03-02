// import ListGroup from "./components/ListGroup.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";
import ButtonAlert from "./components/ButtonAlert.tsx";
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

const App = () => {
    const [isClickedButton, setIsClickedButton] = useState(false);
    return (
        <div>

            {isClickedButton && <ButtonAlert onClose={()=> setIsClickedButton(false)} children={'Button Clicked'}/>}
            {/*<Alert type={'success'} children={'My Alert'}/>*/}
            <Button onClick={() =>
                setIsClickedButton(true)
            } color='warning'
            >
                My Button
            </Button>
        </div>
    );
}
export default App;