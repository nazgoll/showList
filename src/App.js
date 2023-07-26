import {useState} from "react";
import Header from "./components/Header";
import Box from "./components/Box";
import Item from "./components/Item";

function App() {
    const [selectedUser,setSelecterUser]=useState(null);
    const List = [
        {id: 1, name: 'Nazgol', age: '21'},
        {id: 2, name: 'Sajedeh', age: '22'},
        {id: 3, name: 'Mehrana', age: '21'},
    ];
    const handleClick = (id) => {
      const selected= List.find((item)=>item.id ===id)

    }
    return (
        <div className={"flex h-screen w-full justify-between bg-custom-color-1  "}>
            <div className={"w-full flex justify-center mt-2"}>
                {selectedUser?(
                    <div>
                        <div>age:{selectedUser.age}</div>
                        <div>name:{selectedUser.name}</div>

                    </div>
                ):(
                    <div>user not found</div>
                )}
            </div>
            <div className={"w-full max-w-xs bg-custom-color-2 p-5 flex flex-col"}>
                {List.map(({id, name}, index) => (
                    <button onClick={() => handleClick(id)} type={"button"} key={id} className={"p-4 bg-slate-200 hover:bg-slate-300 duration-300 rounded-lg mt-5 "}>
                        {name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default App;
