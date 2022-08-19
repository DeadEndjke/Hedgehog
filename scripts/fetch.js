const Url = 'https://62ff1989a85c52ee4840c8f5.mockapi.io/Hedgehog';
const shop = document.querySelector('.shop')

async function sendResponse() {
    fetch(Url)
        .then(response => response.json())
        .then(result => {

            for (el in result) {
                shop.innerHTML += `
                <div class="card" style="background-color: ${result[el].background};">
                <div class="card_description">
                    <span class="discount">-${result[el].discount} %</span>
                    <div class="name_title">Ёжик</div>
                    <div class="name">"${result[el].name}"</div>
                    <div class="description">${result[el].description}</div>
                    <div class="price">${result[el].price} ₽</div>
                    <div class="newprice">${result[el].price / (100 / result[el].discount)} ₽</div>
                </div>
                <img class="sonic_img" src="${result[el].img}" alt="">
                <img class="info_img" src="/assets/svg/info.svg" alt="">
                <img class="x_img" src="/assets/Vector.png" alt="">
                <div class="triangle"  alt=""></div>
            </div>
                    `
            }
        })





}
sendResponse()
