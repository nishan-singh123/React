import { useRef } from "react";

const Tile = () => {
    const myElement = useRef();

    return (
        <>
            <div>
                <h1>njdffnkjdk</h1>
                <h2>hsdjdbfno</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
                    fugiat?
                </p>

                <input type="text" ref={myElement} /> 
            </div>

            <div>
                <h1>Tile 2</h1>
            </div>

            <div>
                <h1>Tile 3</h1>
            </div>
        </>
    );
};

export default Tile;
