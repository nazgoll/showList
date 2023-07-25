const Box = (props) => {
    return (
        <div
            className={"bg-custom-color-1 my-2 mt-14 rounded-lg shadow-black shadow-lg  flex-col justify-center items-center inline-flex hover:bg-custom-color-4 hover:text-custom-color-1 w-36"}>
            <button className={"text-2xl py-4  "}>
                {props.headerText}
            </button>
        </div>
    )
}
export default Box;