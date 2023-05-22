//Summary
const deliveryFeeElement = document.querySelector('#delivery-fee');
const subTotalElement = document.querySelector('#sub-total');
const totalElement = document.querySelector('#total');

function Summary() {
    const noItemsElement = document.querySelector('#no-items');
    // Tinh tong tien
    const pricesElements = document.querySelectorAll('.prices');

    if (!noItemsElement) {
        var subTotal = 0;
        Array.from(pricesElements).forEach(element => {
            subTotal += parseInt(element.textContent.replace(/,/g, ''));
        });

        //Delivery-fee = 250,000đ
        var deliveryFee = 250000;

        deliveryFeeElement.innerHTML = deliveryFee.toLocaleString();

        //Đưa subTotal vao` element id= "sub-total"

        subTotalElement.innerHTML = subTotal.toLocaleString();

        //Tính total = subtotal + delivery-fee
        var total = subTotal + deliveryFee;
        //Đưa subTotal vao` element id= "sub-total"

        totalElement.innerHTML = total.toLocaleString();
    }
    else {
        deliveryFeeElement.innerHTML = "0";
        subTotalElement.innerHTML = "0";
        totalElement.innerHTML = "0";
    }
}

//Xoá bag-item

const clearItemElements = document.querySelectorAll('.clear-item');
//Lặp qua các nút clear và lắng nghe sự kiện click
var index = clearItemElements.length;
clearItemElements.forEach(function (clearElement) {
    clearElement.onclick = function () {
        clearElement.parentElement.parentElement.parentElement.remove();

        index--;
        if (index == 0) {
            // Tạo phần tử <h3> và thiết lập thuộc tính id và nội dung
            const h3Element = document.createElement('h3');
            h3Element.setAttribute('id', 'no-items');
            h3Element.textContent = 'There are no items in your bag.';

            // Chọn phần tử có class "bag"
            const bagElement = document.querySelector('.bag');

            // Thêm phần tử <h3> vào phần tử "bag"
            bagElement.appendChild(h3Element);
        }
        Summary();
    }
});