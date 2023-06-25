const App = () => {
    return (
        <>
            <button
                onClick={() => {
                    localStorage.setItem(
                        "array",
                        JSON.stringify([
                            "mehran",
                            "Asmat",
                            "Multimillioner",
                            "Billioner",
                        ])
                    );
                    localStorage.setItem(
                        "obj",
                        JSON.stringify({
                            name: "Mehran",
                            fathername: "Asmat ullah",
                            Goal: "MERN stack",
                        })
                    );
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    const arr = localStorage.getItem("array");
                    console.log(JSON.parse(arr));
                }}
            >
                Get Values
            </button>
        </>
    );
};

export default App;
