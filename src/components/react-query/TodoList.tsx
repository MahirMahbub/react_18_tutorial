import useTodos, {Todo} from "../hooks/useTodos.ts";



const TodoList = () => {

    const {data: todos, error, isLoading} = useTodos();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>An error has occurred: {error.message}</p>;
    }
    return (
        <ul className="list-group">
            {(todos as Todo[])?.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;