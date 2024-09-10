export const niches: string[] = ["Startups", "Enterprise Leaders", "Media & Publishers", "Social Good"]

export interface IService {
    icon: string,
    slug: string,
    title: string,
    content: string,
    subservices?: object[]
}

export const services: IService[] = [
    {
        "icon": "/Logo/logo-abstract.svg",
        "slug": "design",
        "title": "Design",
        "content": "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        "subservices": [],
    },
    {
        "icon": "/Logo/logo-abstract.svg",
        "slug": "engineering",
        "title": "Engineering",
        "content": "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        "subservices": [],
    },
    {
        "icon": "/Logo/logo-abstract.svg",
        "slug": "project-management",
        "title": "Project Management",
        "content": "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        "subservices": [],
    },
]


export interface IAboutContent {
    icon: string,
    title: string,
    content: string,
}

export const aboutContents: IAboutContent[] = [
    {
        "icon": "/Logo/logo-abstract.svg",
        "title": "Expertise",
        "content": "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
        "icon": "/Logo/logo-abstract.svg",
        "title": "Client-Centric Approach",
        "content": "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    },
    {
        "icon": "/Logo/logo-abstract.svg",
        "title": "Results-Driven Solutions",
        "content": "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    },
    {
        "icon": "/Logo/logo-abstract.svg",
        "title": "Collaborative Partnership",
        "content": "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    },
]

export interface ITestimonial {
    title: string,
    content: string,
    img: string,
    full_name: string,
    role: string,
    website_url: string,
}

export const testimonials: ITestimonial[] = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
        content: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        img: "/Profile.webp",
        full_name: "John Smith",
        role: "CEO of Chic Boutique",
        website_url: "/",
    },
    {
        title: "Working with SquareUp was a breeze.",
        content: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        img: "/Profile.webp",
        full_name: "Sarah Johnson",
        role: "Founder of HungryBites.",
        website_url: "/",
    },
    {
        title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
        content: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        img: "/Profile.webp",
        full_name: "Mark Thompson",
        role: "CEO of EventMasters",
        website_url: "/",
    },
    {
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        content: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        img: "/Profile.webp",
        full_name: "Laura Adams",
        role: "COO of ProTech Solutions.",
        website_url: "/",
    },
    {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        content: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        img: "/Profile.webp",
        full_name: "Michael Anderson",
        role: "Founder of Dream Homes Realty.",
        website_url: "/",
    },
    {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        content: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        img: "/Profile.webp",
        full_name: "Emily Turner",
        role: "CEO of FitLife Tracker",
        website_url: "/",
    }
]


export interface IFAQ {
    title: string,
    content: string
}

export const faqs: IFAQ[] = [
    {
        title: "What services does SquareUp provide?",
        content: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        title: "How can SquareUp help my business?",
        content: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        title: "What industries does SquareUp work with?",
        content: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        title: "How long does it take to complete a project with SquareUp?",
        content: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
]