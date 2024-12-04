const products = [
    {
        "category": " Women Ethnic Wear",
        "items": [
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi1.png" },
            { "name": "Beyond the Match: A Neon Floral Georgette Saree", "price": "Under ₹1499", "image": "./images/fashion-page/sadi2.png" },
            { "name": " The Irresistible Allure of Soft Silk Sarees", "price": "From ₹999", "image": "./images/fashion-page/sadi3.png" },
            { "name": "Floral Printed Puff Sleeves Gathered Flounce Georgette ", "price": "From ₹2699", "image": "./images/fashion-page/sadi4.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹1299", "image": "./images/fashion-page/sadi5.png" },
            { "name": "Self Design Bollywood Net Saree  (Black)Special price", "price": "From ₹1699", "image": "./images/fashion-page/saree2.png" },

     ]
    },
    {

    "category": " furniture",
        "items": [
            { "name": " Bed With Side Pocket Wooden Bedroom Furniture For Home (Natural Finish), 3-Person Sofa, Brown", "price": "From ₹1999", "image": "./images/furniture/bed.jpg" },
            { "name": "TV Entertainment Unit Set Top Box<br> Stand/Décor Display Unit", "price": "Under ₹11499", "image": "./images/furniture/tvSet.jpg" },
            { "name": "Home Centre Engineered Wood Montoya<br>6-Seater Dining Set With Chairs", "price": "From ₹1699", "image": "./images/furniture/chairs.jpg" },
            { "name": " Shoe Rack Cabinet Slipper Footwear Stand", "price": "From ₹2699", "image": "./images/furniture/shoeRack.jpg" },
            { "name": "Side Table for Bedroom,Bedside Table", "price": "From ₹1699", "image": "./images/furniture/sideTable.jpg" },
            { "name": "Temple and Office|Set Top Box<br> StandI Wooden Mandir (Pack of 1)", "price": "From ₹9699", "image": "./images/furniture/templeHome.jpg" },

     ]
    }
];
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(category => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category.category;
        productList.appendChild(categoryTitle);

        category.items.forEach(item => {
            const product = document.createElement("div");
            product.classList.add("product");

            product.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
            `;

            productList.appendChild(product);
        });
    });
}

displayProducts()
