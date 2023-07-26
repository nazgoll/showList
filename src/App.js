import {useState} from "react";
import Header from "./components/Header";
import Box from "./components/Box";
import List from "./components/List";

function App() {
    const [contact,setContact]=useState(null)
    return (
        <div className={"w-screen h-screen flex flex-row bg-white "}>
            <div className={"basis-3/4 h-full border-r-custom-color-4 border-r-4 flex flex-col items-center "}>
                <Header headerText={"ShowList"}/>
                <div
                    className={"w-3/5 h-3/5 p-10 bg-opacity-60 bg-custom-color-2 backdrop-filter flex shadow-black shadow-lg  flex-col  items-center p-10" +
                        "backdrop-blur-lg shadow-lg rounded-lg "}>
                    <div className={"bg-custom-color-1 my-2 mt-14 rounded-lg shadow-black shadow-lg  flex-col justify-center items-center inline-flex hover:bg-custom-color-4 hover:text-custom-color-1 w-36"}
                    onClick={<List/>}>

                    </div>
                </div>
            </div>

            <div className={"basis-1/4 h-full bg-custom-color-2 flex flex-col items-center "}>
                <Header headerText={"Members"}></Header>
                <button onClick={""}><Box headerText={"Nazgol"}/></button>
                <Box headerText={"Mehrana"}/>
                <Box headerText={"Sajedeh"}/>

            </div>

        </div>
    )
}

export default App;
