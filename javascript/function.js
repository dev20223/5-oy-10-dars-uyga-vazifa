function createRow(phone, index) {
    return `
    <tr data_id= data_${phone.id}>
    <td class="text-center">${index}</td>
    <td id="table-name" class="text-center text-primary" style="cursor: pointer;">${phone.name}</td>
    <td class="text-center">${phone.price}$</td>
    <td class="text-center">${phone.description}</td>
    <td class="text-center">
        <span id="delete" class="text-danger mx-3" style="cursor: pointer;">delete</span>
        <span id="edit" class="text-primary" style="cursor: pointer;">edit</span>
    </td>
</tr>
    `;
};

function validate(name, price) {
    if (!name.value) {
        alert("Nomini kiriting!!!");
        name.setAttribute('class', 'form-control border-danger');
        name.focus();
        return false;
    };

    if (!price.value) {
        alert("Narxini kiriting!!!");
        price.setAttribute('class', 'form-control border-danger');
        price.focus();
        return false;
    };

    if (!Number(price.value)) {
        alert("Raqam kiriting!!!");
        price.setAttribute('class', 'form-control border-danger');
        price.focus();
        return false;
    }

    return true;
}; 

export {createRow, validate};