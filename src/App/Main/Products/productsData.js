const productsData = [
    {
        id:1,
        name:"JASMINE WHITE BAG",
        type:"bag",
        style:"street",
        category:"woman",
        mainimage:"/images/products-img/woman-01.jpg",
        images: ["/images/products-img/woman-01.jpg", "/images/products-img/woman-01.jpg", "/images/products-img/woman-01.jpg"],
        price:3000,
        size: ['s', 'm'],
        color: ['red', 'white'],
        quantity: 3,
        rewievrating: 1,
        sellerrank: 10,
        summary:"This is iPhone X",
        description:"This is iPhone X",
    },
    {
        id:2,
        name:"iPhone SX",
        description:"This is iPhone SX",
        type:"phone",
        capacity:64,
        price:600,
        image:"/images/iphone.png"
    },
    {
        id:3,
        name:"iPhone 7",
        description:"This is iPhone 7",
        type:"phone",
        capacity:32,
        price:300,
        image:"/images/iphone.png"
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        type:"phone",
        capacity:256,
        price:350,
        image:"/images/ipad.png"
    },

]


export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}


export default productsData
