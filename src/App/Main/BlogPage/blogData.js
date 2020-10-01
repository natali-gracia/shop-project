const blogData = [
    {
        id:1,
        name:"Hipster style with Honcharova fashion",
        date:"Jun 15, 2020",
        author: 'Honcharova Workshop',
        image: 'https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/blog-articles%2Fblog3.jpg?alt=media&token=a20d2b3d-3ab8-426c-a7f0-4eebe3c6e775',        
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut laoreet pharetra. Proin mauris mi, egestas eget nibh sit amet, egestas vulputate dui. Sed egestas non sem at sagittis. Mauris augue metus, posuere at porttitor eget, auctor sed tortor. In lobortis ligula vitae odio luctus, posuere luctus lectus suscipit. Proin mauris leo, sollicitudin vel egestas sit amet, egestas at neque. Curabitur sem diam, ultrices eget hendrerit eget, pharetra vel est. <p>Morbi ullamcorper tristique aliquet. Curabitur nec orci a tellus faucibus sollicitudin dapibus id mauris. Proin dolor metus, blandit quis aliquam tincidunt, pharetra a risus. Duis molestie, quam non commodo faucibus, lorem elit suscipit risus, in consectetur lorem sapien non lorem. Maecenas in nibh viverra, bibendum augue ac, dapibus tortor. Aenean eleifend dignissim sem, ac blandit nunc dignissim eget. Ut condimentum lacus at velit pellentesque, id blandit massa vestibulum.</p><p>Quisque luctus tempus convallis. Curabitur id tincidunt est. Donec vehicula tempor tellus, sit amet aliquam enim lobortis vitae. Maecenas tortor orci, scelerisque quis erat sit amet, dictum faucibus ante. Vivamus nulla orci, pulvinar vitae iaculis condimentum, aliquam vitae massa. Sed ultrices lectus vel felis scelerisque, in cursus odio dapibus. Vivamus luctus, enim eget vulputate vestibulum, nisi arcu ultricies justo, sodales lobortis ipsum felis sed massa. Duis dictum tincidunt erat. Pellentesque eget luctus velit, ac ultrices lectus.</p>Pellentesque scelerisque ipsum at gravida volutpat. Nunc elit mi, adipiscing a ligula quis, molestie sagittis eros.', 
    },
    {
        id:2,
        name:"NEW Backpack for trekking boys",
        date:"Aug 01, 2020",
        author: 'Honcharova Workshop',
        image: 'https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/blog-articles%2Fblog2.jpg?alt=media&token=2cb9b975-92d7-4622-98e4-11c13e4b6a5b',
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut laoreet pharetra. Proin mauris mi, egestas eget nibh sit amet, egestas vulputate dui. Sed egestas non sem at sagittis. Mauris augue metus, posuere at porttitor eget, auctor sed tortor. In lobortis ligula vitae odio luctus, posuere luctus lectus suscipit. Proin mauris leo, sollicitudin vel egestas sit amet, egestas at neque. Curabitur sem diam, ultrices eget hendrerit eget, pharetra vel est. <p>Morbi ullamcorper tristique aliquet. Curabitur nec orci a tellus faucibus sollicitudin dapibus id mauris. Proin dolor metus, blandit quis aliquam tincidunt, pharetra a risus. Duis molestie, quam non commodo faucibus, lorem elit suscipit risus, in consectetur lorem sapien non lorem. Maecenas in nibh viverra, bibendum augue ac, dapibus tortor. Aenean eleifend dignissim sem, ac blandit nunc dignissim eget. Ut condimentum lacus at velit pellentesque, id blandit massa vestibulum.</p><p>Quisque luctus tempus convallis. Curabitur id tincidunt est. Donec vehicula tempor tellus, sit amet aliquam enim lobortis vitae. Maecenas tortor orci, scelerisque quis erat sit amet, dictum faucibus ante. Vivamus nulla orci, pulvinar vitae iaculis condimentum, aliquam vitae massa. Sed ultrices lectus vel felis scelerisque, in cursus odio dapibus. Vivamus luctus, enim eget vulputate vestibulum, nisi arcu ultricies justo, sodales lobortis ipsum felis sed massa. Duis dictum tincidunt erat. Pellentesque eget luctus velit, ac ultrices lectus.</p>Pellentesque scelerisque ipsum at gravida volutpat. Nunc elit mi, adipiscing a ligula quis, molestie sagittis eros.', 
    },
    {
        id:3,
        name:"Сase for hairdressers - luxury or necessity",
        date:"Sep 08, 2020",
        author: 'Honcharova Workshop',
        image: 'https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/blog-articles%2Fblog1.jpg?alt=media&token=ed6d6f49-ba77-4e74-8605-41feedef3932',
        summary:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt laboriosam culpa aperiam enim totam perspiciatis, repudiandae consectetur...",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores corrupti. Facere fugit porro, a vitae soluta minus. In iste perspiciatis quisquam tempore veritatis fuga blanditiis impedit nesciunt velit voluptatibus.",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut laoreet pharetra. Proin mauris mi, egestas eget nibh sit amet, egestas vulputate dui. Sed egestas non sem at sagittis. Mauris augue metus, posuere at porttitor eget, auctor sed tortor. In lobortis ligula vitae odio luctus, posuere luctus lectus suscipit. Proin mauris leo, sollicitudin vel egestas sit amet, egestas at neque. Curabitur sem diam, ultrices eget hendrerit eget, pharetra vel est. <p>Morbi ullamcorper tristique aliquet. Curabitur nec orci a tellus faucibus sollicitudin dapibus id mauris. Proin dolor metus, blandit quis aliquam tincidunt, pharetra a risus. Duis molestie, quam non commodo faucibus, lorem elit suscipit risus, in consectetur lorem sapien non lorem. Maecenas in nibh viverra, bibendum augue ac, dapibus tortor. Aenean eleifend dignissim sem, ac blandit nunc dignissim eget. Ut condimentum lacus at velit pellentesque, id blandit massa vestibulum.</p><p>Quisque luctus tempus convallis. Curabitur id tincidunt est. Donec vehicula tempor tellus, sit amet aliquam enim lobortis vitae. Maecenas tortor orci, scelerisque quis erat sit amet, dictum faucibus ante. Vivamus nulla orci, pulvinar vitae iaculis condimentum, aliquam vitae massa. Sed ultrices lectus vel felis scelerisque, in cursus odio dapibus. Vivamus luctus, enim eget vulputate vestibulum, nisi arcu ultricies justo, sodales lobortis ipsum felis sed massa. Duis dictum tincidunt erat. Pellentesque eget luctus velit, ac ultrices lectus.</p>Pellentesque scelerisque ipsum at gravida volutpat. Nunc elit mi, adipiscing a ligula quis, molestie sagittis eros.', 
    }]


export const getBlogMap = (array) => {
    return array.reduce((accObj,blog)=>({
        ...accObj,
        [blog.id]:blog
    }),{})
}


export default blogData
