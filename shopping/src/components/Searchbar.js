
document.querySelector('#search').addEventListener('input', Searchbar)

function Searchbar() {
    const searchProduct= document.querySelector('#search'); 
    const filter = searchProduct.value.toLowerCase(); 
    const productItems = document.querySelectorAll('.card-description card')

    productItems.forEach((item) => {
        let text = item.textContent
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = ' '
        }
        else{
            item.style.display ='Error'
        }
    });



    return (
        <div class="input-group mb-3 searchbar">
            <input type="text" class="form-control" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-dark" type="button" id="button-addo21">Enter</button>
        </div>
    );
}
  export default Searchbar;