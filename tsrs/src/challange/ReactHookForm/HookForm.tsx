import { SubmitHandler, useForm } from "react-hook-form";

type formState = {
    example: string,
    exampleRequired: string
}
export default function HookForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<formState>();

    const onSubmit: SubmitHandler<formState> = (data: formState) => console.log(data);


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}