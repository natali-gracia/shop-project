const productsData = [
    {
        id:1,
        name: 'Andrew leather belt',
        type:"accessories",
        style:"street",
        category:"men",
        material:"100% leather",
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-17.jpg?alt=media&token=f95e681e-5972-46db-9598-3ce538176490",
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-16.jpg?alt=media&token=e87e30c9-04aa-4770-9f55-3c82eedd2675",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-16-1.jpg?alt=media&token=d47deb6e-b9c2-4881-85d8-6bfdcc4d380a"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-15.webp?alt=media&token=72b58017-5b97-4a97-8be1-ff8f826397ed",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-15-1.webp?alt=media&token=b404ff64-b7e3-443d-ba4b-cdb9b3805df5"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspacial-02.jpg?alt=media&token=d439ee3c-6fc2-417c-a25b-56a4d99f2de3",
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-14-1.jpg?alt=media&token=89b6e82a-88fa-48a5-9ac7-ca65caceddd5",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-14.jpg?alt=media&token=8abbd0ed-78f7-419d-adf0-03eca9bbba1c"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-14.jpg?alt=media&token=ab084074-694e-453f-ad1c-6c569bd3fa04",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-14-1.jpg?alt=media&token=ed871539-c1f5-43e7-95e0-b03fc69cb881", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-14-2.jpg?alt=media&token=64321b60-4321-4c71-abd7-7ff596860ccf"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspecial-01.jpg?alt=media&token=e72de10f-6cda-40dc-a67a-7dc18566c766",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspecial-01-1.jpg?alt=media&token=c5c7928d-3a49-431a-9c02-9678dce999b0", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspecial-01-2.jpg?alt=media&token=3af3c46f-9305-4b10-b861-7655c565ffb2", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspecial-01-3.jpg?alt=media&token=55c2a964-04a0-440d-b1b4-bdf923e5acf3", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fspecial-01-4.jpg?alt=media&token=e257354e-5766-4231-b9a6-5a7084ccfeed"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-06-2.jpg?alt=media&token=16630f56-3c56-4bd9-92e7-8acd838cb301",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-06.jpg?alt=media&token=98e538ec-b98d-4598-ba10-cac9968908ae", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-06-1.jpg?alt=media&token=0913b9e9-269f-454c-8862-11cac4a54a25",],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-13.webp?alt=media&token=ed5bfdbe-854b-4409-985a-81510e24cc55",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-13-1.webp?alt=media&token=f739660f-37e8-4181-8512-790825c9acd8"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-12.jpg?alt=media&token=975d5477-509a-4a8b-b26e-29cb7617e7db",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-12-1.jpg?alt=media&token=171be6d8-6fd4-4add-afe0-056ad4467858", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-12-2.jpg?alt=media&token=ecc4fc88-6ea7-415b-9f10-6c4454d589fb", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-12-3.jpg?alt=media&token=ad03dbee-e440-4bbb-b034-f9ce91104c26"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-10.jpg?alt=media&token=69df6625-567c-4425-ac63-0bface874bb4",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-10-1.jpg?alt=media&token=16099be8-797e-4357-a0b0-6942752c9c60"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-09.webp?alt=media&token=f6090e13-5302-4c22-b3a2-c92160305d1a",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-09-1.webp?alt=media&token=eaa3405f-adef-4c55-bf2a-746dcca997c5"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-08.jpg?alt=media&token=7cbf3742-63d9-4763-ba57-d7a84723b7f4",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-08-1.jpg?alt=media&token=6675e42d-6b38-4e6e-bde8-65d48655feb3"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-07.jpg?alt=media&token=cfd61277-6bd4-451c-92fe-22269ca7e7a3",
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-3.jpg?alt=media&token=b8761a05-bc1c-4daa-8345-a2089fcee24b",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-1.jpg?alt=media&token=40b17451-8d6b-4509-bd32-29fe39582bc6", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03.jpg?alt=media&token=658451c9-c993-4f77-bd36-3edaa6e361bb", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-2.jpg?alt=media&token=d1055424-461a-4a4e-8371-dea0f500498a"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-05.webp?alt=media&token=096c37fb-69b5-45d5-9df1-7830951dbf34",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-05-1.webp?alt=media&token=3ae222e5-030f-4b4a-8580-f0d45cc7e881"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-04.jpg?alt=media&token=8f8fc6a0-3a00-4490-bd9d-dbc38cfeaf7e",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-04-1.jpg?alt=media&token=3ad9640c-ff53-4673-b313-460c20a89fb8", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-04-3.jpg?alt=media&token=93de1417-4dbf-4d3f-8c33-88adb6bf894e",  "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-04-2.jpg?alt=media&token=d5a41362-8bc3-4d74-8239-f0c6eb9c1f88"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03.jpg?alt=media&token=658451c9-c993-4f77-bd36-3edaa6e361bb",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-2.jpg?alt=media&token=d1055424-461a-4a4e-8371-dea0f500498a", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-3.jpg?alt=media&token=b8761a05-bc1c-4daa-8345-a2089fcee24b", "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-03-1.jpg?alt=media&token=40b17451-8d6b-4509-bd32-29fe39582bc6"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-02.jpg?alt=media&token=bfd36294-24be-4aa2-a709-2020b61c6328",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fman-02-2.webp?alt=media&token=b2917ca0-120d-4541-9272-5377422e95e6"],
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
        mainimage:"https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-01.jpg?alt=media&token=c900474a-3cf7-43d7-9b1c-d676da3bf4ae",
        images: ["https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/products%2Fwoman-01-1.jpg?alt=media&token=12f1fd6f-2858-47d7-9cdc-6d9f892b2456"],
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

// export const productArrayObj = {}
// productsData.forEach(i => productArrayObj[i.id] = i)


export default productsData
