import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {categories} from "../categories.ts";


const schema = z.object({
    description: z.string({required_error: 'Description is required'}).min(3, {message: 'Description is too short. It should have at least 3 characters'}).max(100, {message: 'Description is too long. It should have at most 100 characters'}),
    amount: z.number({invalid_type_error: 'Amount is required'}).min(0.01, {message: 'Amount should be at least 0.01'}).max(100_000, {message: 'Amount should be at most 100,000'}),
    category: z.enum(categories)
});

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;

}
interface ExpenseData {
    description: string;
    amount: number;
    category: string;

}
interface Props {
    expenses: Expense[];
    setExpenses: (expenses: Expense[]) => void;

}

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = ({expenses, setExpenses}: Props) => {
    const {register, handleSubmit, formState} = useForm<ExpenseFormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: ExpenseData) => {
        const id_ = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;
        const expense: Expense= {id: id_, ...data};
        // const expense: Expense = {id: expenses.length + 1, description: data.description, amount: data.amount, category: data.category};
        setExpenses([...expenses, expense]);
    console.log(expenses);};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3"><
                label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" className="form-control" type="text"/>
                <p>
                    {formState.errors.description && (
                        <p className={"text-danger"}>{formState.errors.description.message}</p>)}
                </p>
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input step="0.01" {...register('amount', {valueAsNumber: true})} id="amount" type="number"
                       className="form-control"/>
                <p>
                    {formState.errors.amount && (<p className={"text-danger"}>{formState.errors.amount.message}</p>)}
                </p>
            </div>
            <div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register('category')} id="category" className="form-select">
                        {categories.slice(1).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <p>
                        {formState.errors.category && (
                            <p className={"text-danger"}>{formState.errors.category.message}</p>)}
                    </p>

                </div>
                {/*disabled={!formState.isValid}*/}
                <button className="btn btn-primary" type={"submit"}>Submit</button>
            </div>
        </form>
    );
};

export default ExpenseForm;