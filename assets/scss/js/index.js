// const div = document.getElementById('apidiv')
// const btn = document.getElementById('btn')
// let page=1
// let limit=3

// async function getproducts() {
//     let skip = (page = 1)*limit;
//     try{
//    const response = await axios.get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products?page=${page}&limit=${limit}&skip=${skip}`)
//    const data = response.data;
//    db=response.data
//    data.forEach(item=>{
// const box = document.createElement('div')
// box.className = 'boxDiv'
// box.innerHTML = `
// <img style="width:300px " src='${item.image}' alt="">
// <p class='title'>${item.name}</p>
{/* <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button> */}
// `
// div.appendChild(box)
// })
// page++;
// }
//     catch(error){
//         console.error('Error fetching products:',error)
//     }
// }

const div = document.getElementById('productsList')
const btn = document.getElementById('pagi')

let page = 1
let limit = 3

async function getProducts() {
    let skip = (page - 1) * limit;
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'boxDiv';
            box.innerHTML = `            
                <img class="apiimage" src="${item.image}" alt="">                    
                <p class='title'>${item.name}</p>
                <p class='title'>${item.date}</p>
                <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

                `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts)

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getProducts()
}
