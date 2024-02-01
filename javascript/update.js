const form = document.getElementById('form');
const names = document.getElementById('name');
const price = document.getElementById('price');
const description = document.getElementById('description');
const button = document.getElementById('button');

button && button.addEventListener('click', function(e) {
    e.preventDefault();
    let id = window.location.href.substring(window.location.href.search('id=')+3);
    let phone = {
        name:names.value,
        price:price.value,
        description:description.value
    }

    fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(phone)
    })
        .then(res => res.json())
        .then(data => {
            let domain = window.location.href.substring(0, window.location.href.search('pages'));
            window.location.assign(`${domain}/index.html?id=${id}`)
        })
        .catch(err => {
            console.log(err);
        })

})

document.addEventListener('DOMContentLoaded', function() {
    let id = window.location.href.substring(window.location.href.search('id=')+3);
    fetch(`https://auth-rg69.onrender.com/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
            names.setAttribute('placeholder', `${data.name}`)
            price.setAttribute('placeholder', `${data.price}`)
            description.setAttribute('placeholder', `${data.description}`)
        })
        .catch(err => {
            console.log(err);
        })
})