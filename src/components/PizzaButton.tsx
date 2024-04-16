interface PizzaButtonProps {
    onClick: () => void;
}

const PizzaButton = ({onClick}: PizzaButtonProps) => {
    return <button onClick = {onClick}>
        'Add toppings'</button>;
}


export default PizzaButton;