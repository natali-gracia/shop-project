const productsData = [
    {
        id:1,
        name: 'Jasmine white bag',
        type:"bag",
        style:"street",
        category:"woman",
        material:"100% leather",
        mainimage:"/images/products-img/woman-01.jpg",
        images: ["/images/products-img/woman-01-1.jpg"],
        price: 3000,
        discount_price: 2500,
        // options: [],
        options: [{
            name: 'size',
            value: ['s', 'm'],
        },
        {
            name: 'color',
            value: ['#cc0000', '#f5f3ea'],
        }],
        in_stock: 3,
        rewievrating: 1,
        sellerrank: 10,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
    },
    {
        id:2,
        name: 'Jasmine black bag',
        type:"bag",
        style:"street",
        category:"woman",
        material:"100% leather",
        mainimage:"/images/products-img/woman-01.jpg",
        images: ["/images/products-img/woman-01-1.jpg"],
        price: 3000,
        discount_price: 2500,
        // options: [],
        options: [{
            name: 'size',
            value: ['s', 'm'],
        },
        {
            name: 'color',
            value: ['#cc0000', '#f5f3ea'],
        }],
        in_stock: 3,
        rewievrating: 1,
        sellerrank: 10,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
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
