const url = "./HW_data.json";

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    const list = document.querySelector('.cards');
    data.forEach(item => {
        list.insertAdjacentHTML('beforeend', `
            <div class="card">
                <img src="${item.image}" alt="${item.title}">
                <div class="description">
                    <h2>${item.title}</h2>
                    <div class="list">
                        <p><span class="grey">${item.parapgraph}</span></p>
                        <p class="red"><span class="red">$${item.price}</span></p>
                    </div>
                </div>
            </div>
        `)
    });
})