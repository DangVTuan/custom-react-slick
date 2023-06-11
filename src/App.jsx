import "./App.css";
const data = [
    { id: "01", title: "check box 1", status: true },
    { id: "02", title: "check box 2", status: true },
    { id: "03", title: "check box 3", status: false },
    { id: "04", title: "check box 4", status: true },
];

function App() {
    function handleCheck() {}
    return (
        <>
            {data.map((item) => {
                return (
                    <div key={item.id} className="bg-blue-400">
                        <input type="checkbox" onChange={() => handleCheck()} />
                        <p className="text-5xl">{item.title}</p>
                        <>{item.status + ""}</>
                    </div>
                );
            })}
        </>
    );
}

export default App;
