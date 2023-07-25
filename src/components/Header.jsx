const Header = (props) => {
    return (

        <button className=" text-5xl font-extrabold text-custom-color-5 flex justify-center pt-6  ">
            {props.headerText}
        </button>

    )
}
export default Header;