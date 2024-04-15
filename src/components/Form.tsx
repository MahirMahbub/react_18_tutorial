import {FieldValues, useForm} from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const Form = () => {

    const {register, handleSubmit, formState} = useForm<FormData>();
    // console.log(formState);
    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3"><label htmlFor={"name"} className="form-label">Name</label>
                <input
                    {...register('name', {required: true, minLength: 3})}
                    id={"name"}
                    type={"text"}
                    className="form-control"
                />
                <p>
                    {formState.errors.name?.type === 'required' && <p className={"text-danger"}>'Name is required'</p>}
                    {formState.errors.name?.type === 'minLength' &&
                        <p className={"text-danger"}>'Name is too short. It should have at least 3 characters'</p>}
                </p>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form">Age</label>
                <input
                    {...register('age', {required: true, minLength: 2, maxLength: 2})}
                    id="age" type="number"
                    className="form-control"
                />
                <p>
                    {formState.errors.age?.type === 'required' && <p className={"text-danger"}>'Age is required' </p>}
                    {formState.errors.age?.type === 'minLength' &&
                        <p className={"text-danger"}>'Age should be at least 10'</p>}
                    {formState.errors.age?.type === 'maxLength' &&
                        <p className={"text-danger"}>'Age should be at most 99'</p>}
                </p>
            </div>
            <button className="btn btn-primary" type={"submit"}>Submit</button>
        </form>
    );
}

export default Form;