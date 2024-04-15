import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: 'Name is too short. It should have at least 3 characters'}),
    age: z.number({invalid_type_error: 'Age field is required'}).int().min(10, {message: 'Age should be at least 10'}).max(99, {message: 'Age should be at most 99'}),
});

type FormData = z.infer<typeof schema>; // { name: string; age: number; }
const Form = () => {

    const {register, handleSubmit, formState} = useForm<FormData>({resolver: zodResolver(schema)});
    // console.log(formState);
    const onSubmit = (data: FieldValues) => console.log(data);

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3"><label htmlFor={"name"} className="form-label">Name</label>
            <input
                {...register('name')}
                id={"name"}
                type={"text"}
                className="form-control"
            />
            <p>
                {formState.errors.name && (<p className={"text-danger"}>{formState.errors.name.message}</p>)}
            </p>
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form">Age</label>
            <input
                {...register('age', {valueAsNumber: true})}
                id="age" type="number"
                className="form-control"
            />
            <p>
                {formState.errors.age && (<p className={"text-danger"}>{formState.errors.age.message}</p>)}
            </p>
        </div>
        <button className="btn btn-primary" type={"submit"}>Submit</button>
    </form>);
}

export default Form;