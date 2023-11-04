import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className="text-center font-bold mt-72">OPPSS!Page not found <br />404 ERROR <br />Return <Link className="text-red-600 underline" to="/">Home</Link></h1>
           
        </div>
    );
};

export default Error;