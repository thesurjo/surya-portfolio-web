interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Personal Portfolio',
        description: 'In this project I try making my own portfolio website for myself. Showcase my projects, my social media handles, my experience on the website.',
        imageUrl: 'myproject/image/jan-vlacuha-Rns_A8bJ_dQ-unsplash.jpg',
        link: '#'
    },
    {
        title: 'Dynamics Website Deployment in AWS',
        description: 'In this project I try deployed dynamics website in AWS so that we can add or delete the data by connecting to databases.',
        imageUrl: 'myproject/image/austin-poon-JO_S6ewBqAk-unsplash.jpg',
        link: '#'
    },
    {
        title: 'Iris Flower Detection',
        description: 'In this project I try to detect the iris flower type by using a machine learning prediction model. And deployed in Streamlit Python.',
        imageUrl: 'myproject/image/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg',
        link: '#'
    },
    {
        title: 'Cab Booking',
        description: 'In this project we can book a cab by using Java.',
        imageUrl: 'myproject/image/kevin-canlas-QYHehJ9Iovs-unsplash.jpg',
        link: '#'
    }
];