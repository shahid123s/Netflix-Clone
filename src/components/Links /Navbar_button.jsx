import './navbar_buttons.css'

const Navbar_button = ({link , title}) => {
    return (
        <a href = {link} >{title}</a>
    )
}

export default Navbar_button