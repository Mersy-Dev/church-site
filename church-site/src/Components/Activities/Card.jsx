import './activities.css'
const Card = (props) => {
  return (
    <>
        <div className="box btn_shadow">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
        </div>
    </>
  )
}

export default Card