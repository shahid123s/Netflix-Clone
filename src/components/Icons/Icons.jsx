import './icons.css'
const Icons = ({logo, title}) => {

    return(
        <button className='icons-btn'>
            <img className='icon-img' src={logo} alt={title} />
        </button>
    )
}


export default Icons