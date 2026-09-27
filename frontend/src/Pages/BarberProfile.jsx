import { useParams } from "react-router-dom";

export default function BarberProfile () {

    const { id } = useParams();

    return (
        <div className="container mt-5">
            <h1>Professional Profile</h1>
            <p>Professional ID: {id}</p>
        </div>
    );
};