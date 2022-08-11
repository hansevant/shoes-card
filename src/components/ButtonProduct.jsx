const ButtonProduct = (props) => {
    return(
        <div className='button__box'>
        <a href="#hero" onClick={(e) => addCart(props.name, e)}>Add to Cart</a>
        <a href="#hero" id='wishlist' onClick={addWishlist}>
            Add to Wishlist💖
        </a>
        </div>
    )
}

const addWishlist = () =>{
    const l = document.querySelector('#wishlist')
    l.classList.toggle('wishlist')
    if (l.innerHTML === "Add to Wishlist💖") {
      l.innerHTML = "Added to Wishlist💖";
    } else {
      l.innerHTML = "Add to Wishlist💖";
    }
}
  
const addCart = (e) =>{
    alert(e + ' Ditambahkan ke keranjang!' )
}

export default ButtonProduct