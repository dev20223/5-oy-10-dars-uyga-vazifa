import { createRow, validate } from "./function.js";

const form = document.getElementById("form");
const name = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const button = document.getElementById("button");
const tbody = document.getElementById("tbody");


document.addEventListener("DOMContentLoaded", () => {
    fetch('https://auth-rg69.onrender.com/api/products/all')
        .then(res => res.json())
        .then(data => {
            data && data.forEach((item, index) => {
            let tr = createRow(item, index+1);
            tbody.innerHTML += tr;
            });

            let phoneName = document.querySelectorAll('#table-name')
            phoneName && phoneName.forEach(item => {
                item && item.addEventListener('click', function() {
                    let id = this.parentNode.getAttribute('data_id').substring(5);
                    let domain = window.location.href.substring(0, window.location.href.search('index'));
                    window.location.assign(`${domain}/pages/about.html?id=${id}`)
                })
            });

            let deleteButtons = document.querySelectorAll("#delete");
            deleteButtons.forEach(del => {
                del && del.addEventListener('click', function(e) {
                    e.preventDefault();
                    let id = this?.parentNode?.parentNode?.getAttribute('data_id').substring(5);
                    let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?");

                    if (isDelete) {
                        fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
                        method:'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
                                window.location.reload();
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                }); 
            });

            let edit = document.querySelectorAll('#edit')
            edit && edit.forEach(item => {
                item && item.addEventListener('click', function(e) {
                    e.preventDefault();
                    let id = this?.parentNode?.parentNode?.getAttribute('data_id').substring(5);
                    let domain = window.location.href.substring(0, window.location.href.search('index'));
                    window.location.assign(`${domain}/pages/update.html?id=${id}`)
                })
            });
        })
        .catch(err => {
            console.log(err);
        });

});

button && button.addEventListener("click", (e) => {
    e.preventDefault();

    if (validate(name, price)) {
        let phone = {
                name: name.value,
                description: description.value,
                status: "active",
                price: price.value,
                category_id: "2"
        };

        fetch('https://auth-rg69.onrender.com/api/products/', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(phone)

        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    let tr = createRow(phone);
                    tbody.innerHTML += tr;
                    form.reset();
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
});