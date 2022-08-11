const CheckStock = (props) => {
    if(props.stock){
        return <p className='stock__true'>Stock Available</p>
    }else{
        return <p className='stock__false'>Out of Stock</p>
    }
}

export default CheckStock