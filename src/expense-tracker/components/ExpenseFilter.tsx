import {categories} from "../categories.ts";
interface Props{
    onSelectCategory: (category: string) => void;

}
export const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
};