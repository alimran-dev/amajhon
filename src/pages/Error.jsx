import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="text-4xl font-bold text-center">Oops</h1>
            <p className="text-8xl font-bold text-center">{error.status}</p>
            <p className="text-3xl font-bold text-center">{error.statusText || error.error.message}</p>
        </div>
    );
};

export default Error;