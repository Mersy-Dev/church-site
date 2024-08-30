import './activities.css'
const Card = (props) => {
  return (
    <>
        <a href='' className="box btn_shadow">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
        </a>
    </>
  )
}

export default Card