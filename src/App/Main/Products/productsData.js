const productsData = [
    {
        id:1,
        name: 'Andrew leather belt',
        type:"accessories",
        style:"street",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-17.jpg",
        images: [],
        price: 2500,
        discount_price: 2000,
        options: [{
            name: 'size',
            value: ['s'],
        },
        {
            name: 'color',
            value: ['#a46d33', '#000'],
        }],
        in_stock: 9,
        sellerrank: 26,
        likes: 28,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:111,
                author: 'John Doe',
                e_mail: 'john@gmail.com',
                date: 'Apr 08, 2020',
                rating: 5,
                title: 'Excellent choice!',
                text: 'This was my best purchase! Quality, design, convenience and style. Very satisfied! I will order more.'
            },
            {
                id:112,
                author: 'Martin Gellar',
                e_mail: 'john@gmail.com',
                date: 'Jul 12, 2020',
                rating: 5,
                title: 'Very comfortable',
                text: 'Very comfortable bag. I can put all my things into it. But, I would like to have leather handles.'
            }

        ]
    },
    {
        id:2,
        name: 'Alli black wallet',
        type:"wallets",
        style:"street",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-16.jpg",
        images: ["/images/products-img/woman-16-1.jpg"],
        price: 3400,
        discount_price: 3000,
        options: [{
            name: 'size',
            value: ['s'],
        },
        {
            name: 'color',
            value: ['#000'],
        }],
        in_stock: 5,
        sellerrank: 16,
        likes: 23,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:3,
        name: 'Street style backpack',
        type:"bags",
        style:"street",
        category:"men",
        material:"textile/leather",
        mainimage:"/images/products-img/man-15.webp",
        images: ["/images/products-img/man-15-1.webp"],
        price: 3500,
        discount_price: 3000,
        options: [{
            name: 'size',
            value: ['l'],
        },
        {
            name: 'color',
            value: ['#a46d33'],
        }],
        in_stock: 5,
        sellerrank: 12,
        likes: 18,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:311,
                author: 'Mark Doe',
                e_mail: 'natali@gmail.com',
                date: 'May 08, 2020',
                rating: 4,
                title: 'Good backpack',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
            {
                id:312,
                author: 'Andrew Gellar',
                e_mail: 'john@gmail.com',
                date: 'Jul 12, 2020',
                rating: 3,
                title: 'Comfortable, but little stange',
                text: 'VLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
            {
                id:313,
                author: 'Mihael Milar',
                e_mail: 'angela@gmail.com',
                date: 'Aug 02, 2020',
                rating: 4,
                title: 'Stylish for street',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            }

        ]
    },
    {
        id:4,
        name: 'Vintage Biker Card Wallet',
        type:"bags",
        style:"street",
        category:"special-designs",
        material:"100% leather",
        mainimage:"/images/products-img/spacial-02.jpg",
        images: [],
        price: 3200,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s',],
        },
        {
            name: 'color',
            value: ['#a46d33'],
        }],
        in_stock: 1,
        sellerrank: 11,
        likes: 9,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:5,
        name: 'Mark brown wallet',
        type:"wallets",
        style:"business",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-14-1.jpg",
        images: ["/images/products-img/man-14.jpg"],
        price: 3200,
        discount_price: 2700,
        options: [{
            name: 'size',
            value: ['s',],
        },
        {
            name: 'color',
            value: ['#511804'],
        }],
        in_stock: 5,
        sellerrank: 23,
        likes: 16,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:6,
        name: 'Original leather swordbelt',
        type:"accessories",
        style:"luxury",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-14.jpg",
        images: ["/images/products-img/woman-14-1.jpg", "/images/products-img/woman-14-2.jpg"],
        price: 2200,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s',],
        },
        {
            name: 'color',
            value: ['#000'],
        }],
        in_stock: 8,
        sellerrank: 25,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:61,
                author: 'Eve Lorens',
                e_mail: 'eve@gmail.com',
                date: 'Apr 25, 2020',
                rating: 5,
                title: 'Beautiful',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur.'
            },
            {
                id:62,
                author: 'Eleonora Smit',
                e_mail: 'eleonora@gmail.com',
                date: 'Jun 09, 2020',
                rating: 5,
                title: "It's gorgeous",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur."
            },
            {
                id:63,
                author: 'Layla Evens',
                e_mail: 'layla@gmail.com',
                date: 'Jun 21, 2020',
                rating: 5,
                title: 'I absolutely LOVE this!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur.'
            },
        ]
    },
    {
        id:7,
        name: 'Case for hairdresser',
        type:"cases",
        style:"business",
        category:"special-designs",
        material:"100% leather",
        mainimage:"/images/products-img/special-01.jpg",
        images: ["/images/products-img/special-01-1.jpg", "/images/products-img/special-01-2.jpg", "/images/products-img/special-01-3.jpg", "/images/products-img/special-01-4.jpg"],
        price: 6000,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s'],
        },
        {
            name: 'color',
            value: ['#000'],
        }],
        in_stock: 1,
        sellerrank: 11,
        likes: 42,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:8,
        name: 'Nadin style bag',
        type:"bags",
        style:"business",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-06-2.jpg",
        images: ["/images/products-img/woman-06.jpg", "/images/products-img/woman-06-1.jpg",],
        price: 4000,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m'],
        },
        {
            name: 'color',
            value: ['#eea09c'],
        }],
        in_stock: 6,
        sellerrank: 29,
        likes: 22,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:81,
                author: 'Ann-Mari Simpson',
                e_mail: 'ann@gmail.com',
                date: 'Mar 26, 2020',
                rating: 5,
                title: 'Lovely bag!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:82,
                author: 'Mina Rich',
                e_mail: 'mina@gmail.com',
                date: 'Apr 12, 2020',
                rating: 5,
                title: 'So cute!!!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:83,
                author: 'Harriet Black',
                e_mail: 'harriet@gmail.com',
                date: 'Jun 13, 2020',
                rating: 5,
                title: 'I am very happy with my purchase!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:84,
                author: 'Dianne Lesli',
                e_mail: 'dianne@gmail.com',
                date: 'Jul 02, 2020',
                rating: 5,
                title: 'Love my bag',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:85,
                author: 'Katia Pane',
                e_mail: 'katia@gmail.com',
                date: 'Jul 06, 2020',
                rating: 5,
                title: 'Absolutely in love with it!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:86,
                author: 'Jelena Gellar',
                e_mail: 'jelena@gmail.com',
                date: 'Sep 14, 2020',
                rating: 4,
                title: 'Pretty one',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            }

        ]
    },
    {
        id:9,
        name: 'Morgan leather bag',
        type:"bags",
        style:"street",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-13.webp",
        images: ["/images/products-img/man-13-1.webp"],
        price: 4500,
        discount_price: 4000,
        options: [{
            name: 'size',
            value: ['l',],
        },
        {
            name: 'color',
            value: ['#a46d33'],
        }],
        in_stock: 4,
        sellerrank: 8,
        likes: 19,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:91,
                author: 'Paul Smit',
                e_mail: 'paul@gmail.com',
                date: 'Jun 21, 2020',
                rating: 4,
                title: 'Really nice style & quality of leather',
                text: 'This was my best purchase! Quality, design, convenience and style. Very satisfied! I will order more.'
            }
        ]
    },
    {
        id:10,
        name: 'Perla premium bag',
        type:"bags",
        style:"premium",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-12.jpg",
        images: ["/images/products-img/woman-12-1.jpg", "/images/products-img/woman-12-2.jpg", "/images/products-img/woman-12-3.jpg"],
        price: 5500,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m',],
        },
        {
            name: 'color',
            value: ['#000','#cc0000'],
        }],
        in_stock: 3,
        sellerrank: 9,
        likes: 15,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:101,
                author: 'Patricia Doe',
                e_mail: 'patricia@gmail.com',
                date: 'May 16, 2020',
                rating: 5,
                title: 'Very happy with the bag',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:102,
                author: 'Daniela Gellar',
                e_mail: 'daniela@gmail.com',
                date: 'Jul 24, 2020',
                rating: 5,
                title: 'Brilliant!!!!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            }

        ]
    },
    {
        id:11,
        name: 'Sienna Phone Case',
        type:"cases",
        style:"business",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-10.jpg",
        images: ["/images/products-img/man-10-1.jpg"],
        price: 2500,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s'],
        },
        {
            name: 'color',
            value: ['#a46d33'],
        }],
        in_stock: 3,
        sellerrank: 27,
        likes: 6,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:12,
        name: 'Dominic brown bag',
        type:"bags",
        style:"business",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-09.webp",
        images: ["/images/products-img/man-09-1.webp"],
        price: 4900,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m'],
        },
        {
            name: 'color',
            value: ['#511804'],
        }],
        in_stock: 1,
        sellerrank: 4,
        likes: 8,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:13,
        name: 'Eva women bag',
        type:"bags",
        style:"business",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-08.jpg",
        images: ["/images/products-img/woman-08-1.jpg"],
        price: 3500,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s',],
        },
        {
            name: 'color',
            value: ['#fff'],
        }],
        in_stock: 2,
        sellerrank: 11,
        likes: 13,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:14,
        name: 'Leather men watch',
        type:"accessories",
        style:"street",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-07.jpg",
        images: [],
        price: 2500,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['s',],
        },
        {
            name: 'color',
            value: ['#5c4d38','#511804','#a46d33',],
        }],
        in_stock: 15,
        sellerrank: 28,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:141,
                author: 'Sebastian Olen',
                e_mail: 'sebastian@gmail.com',
                date: 'May 09, 2020',
                rating: 3,
                title: 'Nice quality',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            },
            {
                id:142,
                author: 'Enzo Cellar',
                e_mail: 'enzo@gmail.com',
                date: 'Jul 21, 2020',
                rating: 4,
                title: 'Ultra pratique',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur'
            }
        ]
    },
    {
        id:15,
        name: 'JEANS blue bag',
        type:"bags",
        style:"street",
        category:"women",
        material:"textile",
        mainimage:"/images/products-img/woman-03-3.jpg",
        images: ["/images/products-img/woman-03-1.jpg", "/images/products-img/woman-03.jpg", "/images/products-img/woman-03-2.jpg"],
        price: 1800,
        discount_price: 1200,
        options: [{
            name: 'size',
            value: ['s', 'l'],
        },
        {
            name: 'color',
            value: ['#477ca8'],
        }],
        in_stock: 4,
        sellerrank: 16,
        likes: 45,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:151,
                author: 'Natali Doe',
                e_mail: 'natali@gmail.com',
                date: 'Aug 08, 2020',
                rating: 4,
                title: 'Good choice!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
        ]
    },
    {
        id:16,
        name: 'Morgan bag',
        type:"bags",
        style:"street",
        category:"men",
        material:"textile/leather",
        mainimage:"/images/products-img/man-05.webp",
        images: ["/images/products-img/man-05-1.webp"],
        price: 2500,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m',],
        },
        {
            name: 'color',
            value: ['#5c5d61',],
        }],
        in_stock: 1,
        sellerrank: 8,
        likes: 16,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:17,
        name: 'Ginger backpack',
        type:"bags",
        style:"street",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-04.jpg",
        images: ["/images/products-img/woman-04-1.jpg", "/images/products-img/woman-04-3.jpg",  "/images/products-img/woman-04-2.jpg"],
        price: 4200,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m',],
        },
        {
            name: 'color',
            value: ['#c9b2bc','#000'],
        }],
        in_stock: 2,
        sellerrank: 20,
        likes: 27,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: []
    },
    {
        id:18,
        name: 'JEANS blue wallet',
        type:"wallets",
        style:"street",
        category:"women",
        material:"textile",
        mainimage:"/images/products-img/woman-03.jpg",
        images: ["/images/products-img/woman-03-2.jpg", "/images/products-img/woman-03-3.jpg", "/images/products-img/woman-03-1.jpg"],
        price: 1500,
        discount_price: 1200,
        options: [{
            name: 'size',
            value: ['s'],
        },
        {
            name: 'color',
            value: ['#477ca8'],
        }],
        in_stock: 6,
        sellerrank: 15,
        likes: 11,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:181,
                author: 'Natali Doe',
                e_mail: 'natali@gmail.com',
                date: 'May 08, 2020',
                rating: 5,
                title: 'Best wallet!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
            {
                id:182,
                author: 'Sara Gellar',
                e_mail: 'john@gmail.com',
                date: 'Jul 12, 2020',
                rating: 5,
                title: 'Beautiful and comfortable',
                text: 'VLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
            {
                id:183,
                author: 'Angela Milar',
                e_mail: 'angela@gmail.com',
                date: 'Aug 02, 2020',
                rating: 5,
                title: 'Very cute and stylish',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            }

        ]
    },
    {
        id:19,
        name: 'Max brown bag',
        type:"bags",
        style:"street",
        category:"men",
        material:"100% leather",
        mainimage:"/images/products-img/man-02.jpg",
        images: ["/images/products-img/man-02-2.webp"],
        price: 3600,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['m'],
        },
        {
            name: 'color',
            value: ['#7e493b'],
        }],
        in_stock: 5,
        sellerrank: 12,
        likes: 15,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:191,
                author: 'Eric Packman',
                e_mail: 'eric@gmail.com',
                date: 'Apr 11, 2020',
                rating: 4,
                title: 'Good bag for work!',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...'
            },
        ]
    },
    {
        id:20,
        name: 'Jasmine white bag',
        type:"bags",
        style:"street",
        category:"women",
        material:"100% leather",
        mainimage:"/images/products-img/woman-01.jpg",
        images: ["/images/products-img/woman-01-1.jpg"],
        price: 3000,
        discount_price: 0,
        options: [{
            name: 'size',
            value: ['l'],
        },
        {
            name: 'color',
            value: ['#f5f3ea', '#333'],
        }],
        in_stock: 3,
        sellerrank: 19,
        likes: 31,
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        rewievs: [
            {
                id:201,
                author: 'John Doe',
                e_mail: 'john@gmail.com',
                date: 'Mar 06, 2020',
                rating: 5,
                title: 'Excellent choice!',
                text: 'This was my best purchase! Quality, design, convenience and style. Very satisfied! I will order more.'
            },
            {
                id:202,
                author: 'Sara Gellar',
                e_mail: 'john@gmail.com',
                date: 'Jul 12, 2020',
                rating: 4,
                title: 'Very comfortable',
                text: 'Very comfortable bag. I can put all my things into it. But, I would like to have leather handles.'
            }

        ]
    },
]


export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}


export default productsData
