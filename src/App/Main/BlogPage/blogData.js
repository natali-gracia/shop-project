const blogData = [
    {
        id:1,
        name:"Street style with Honcharova fashion",
        date:"Jun 15, 2020",
        image: '/images/blog/blog3.jpg',        
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
    },
    {
        id:2,
        name:"NEW Backpack for trekking boys",
        date:"Aug 01, 2020",
        image: '/images/blog/blog2.jpg',
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
    },
    {
        id:3,
        name:"Сase for hairdressers - luxury or necessity",
        date:"Sep 08, 2020",
        image: '/images/blog/blog1.jpg',
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
    },
]


export const getBlogMap = (array) => {
    return array.reduce((accObj,blog)=>({
        ...accObj,
        [blog.id]:blog
    }),{})
}


export default blogData
