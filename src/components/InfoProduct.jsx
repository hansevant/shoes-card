import ButtonProduct from "./ButtonProduct"
import CheckStock from "./CheckStock"

const InfoProduct = (props) => {
  
    const benefits = props.benefits
    const listBenefits = benefits.map((benefit) => <li>{benefit}</li> )
  
    return(
        <div className='info__box'>
            <p className='cat__box'>{props.cat}</p>
            <p className='title__box'>{props.name}</p>
            <p className='price__box'>{props.price}</p>
            <CheckStock stock={props.stock} />
            <p className='desc__box'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iure dolor vel quod nam eligendi nulla obcaecati saepe commodi rem iste laboriosam, atque soluta consequatur amet odio accusamus, reprehenderit facilis cupiditate explicabo dolorum veniam! Officiis commodi sunt debitis illum quam, maiores incidunt quod sint magni dolorum assumenda, natus hic totam.</p>
            <ul>{listBenefits}</ul>
            <ButtonProduct name={props.name}/>
        </div>
    )
}

export default InfoProduct