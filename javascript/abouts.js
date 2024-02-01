const names = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const categoryId = document.getElementById("category_id");

document.addEventListener('DOMContentLoaded', function() {
    let id= window.location.href.substring(window.location.href.search("id=")+3)

    fetch(`https://auth-rg69.onrender.com/api/products/${id}`)
        .then(res => res.json())
        .then(data => {

                names.innerHTML = `Name: ${data.name}`
                price.innerHTML = `Price: ${data.price}$`
                if (data.description) {
                    description.innerHTML = `Comments: ${data.description}`
                }
                categoryId.innerHTML = `Category_id: ${data.category_id}`
            
        })
        .catch(err => {
            console.log(err);
        })
})