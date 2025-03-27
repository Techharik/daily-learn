import { use } from "react";

const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    return response.json();
};

export default function FetchTodo() {
    const data = use(fetchData()); // ✅ Works only in Server Components

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.image} alt={data.title} width={100} />
        </div>
    );
}
