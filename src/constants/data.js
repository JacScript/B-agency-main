import images from "./images";



const collections = [
  {
    id: 1,
    title: "Maize",
    imageUrl: images.maize,
    routeName: 'maize',
    items: [
        {
            id: 1,
            title: 'Maize',
            imgUrl: images.maize,
        },
        {
            id: 2,
            title: 'Olive-Oil',
            imgUrl: images.olive,
        },
        {
            id: 3,
            title: 'Nut',
            imgUrl: images.nut,
        },
        {
            id: 4,
            title: 'Coffee',
            imgUrl: images.coffee,
        } 
    ]
  },
  {
     id: 2,
     title: 'Olive-Oil',
     imageUrl: images.olive,
     items: [
        {
            id: 1,
            title: 'Maize',
            imgUrl: images.maize,
        },
        {
            id: 2,
            title: 'Olive-Oil',
            imgUrl: images.olive,
        },
        {
            id: 3,
            title: 'Nut',
            imgUrl: images.nut,
        },
        {
            id: 4,
            title: 'Coffee',
            imgUrl: images.coffee,
        } 
     ]
  },
  {
    id: 3,
    title: 'Nut',
    imageUrl: images.nut,
    items: [
        {
            id: 1,
            title: 'Maize',
            imgUrl: images.maize,
        },
        {
            id: 2,
            title: 'Olive-Oil',
            imgUrl: images.olive,
        },
        {
            id: 3,
            title: 'Nut',
            imgUrl: images.nut,
        },
        {
            id: 4,
            title: 'Coffee',
            imgUrl: images.coffee,
        } 
    ]
  },
  {
    id: 4,
    title: 'Coffee',
    imageUrl: images.coffee,
    items: [
        {
            id: 1,
            title: 'Maize',
            imgUrl: images.maize,
        },
        {
            id: 2,
            title: 'Olive-Oil',
            imgUrl: images.olive,
        },
        {
            id: 3,
            title: 'Nut',
            imgUrl: images.nut,
        },
        {
            id: 4,
            title: 'Coffee',
            imgUrl: images.coffee,
        } 
    ]
  }
];

// const items = [
//     {
//         id: 1,
//         title: 'Maize',
//         imgUrl: images.maize,
//     },
//     {
//         id: 2,
//         title: 'Olive-Oil',
//         imgUrl: images.olive,
//     },
//     {
//         id: 3,
//         title: 'Nut',
//         imgUrl: images.nut,
//     },
//     {
//         id: 4,
//         title: 'Coffee',
//         imgUrl: images.coffee,
//     }
// ];

const features = [
    {  id: 1,
       title: "Direct transactions between farmers and industry/retail",
       image:"/src/assets/blog1.jpg",
       heading: "transparency"
      },
      {
        id: 2,
        title: "Redistribution of value in food supply chain",
        image:"/src/assets/blog2.jpg",
        heading: "fairtrade"
      },
      {
        id: 3,
        title: "Reduce costs to buyers without losing reliability",
        image:"/src/assets/blog3.jpg",
        heading: "User friendly"
      }
]

export default {features, collections};