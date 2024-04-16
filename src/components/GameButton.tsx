interface GameButtonProps{
    name?: string;
    onClick: () => void;
}

const GameButton = ({name="John", onClick}: GameButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`btn btn-primary`}
        >
            {name}
        </button>);
}

export default GameButton;