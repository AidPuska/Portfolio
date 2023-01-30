import yelp from './assets/yelpcamp.png'
import proManag from './assets/proManag.png'
import portfolio from './assets/portfolio.png'
import vaktija from './assets/vaktija.png'


export const projects = [
    {
        id: 0,
        name: 'Yelp Camp',
        desc: 'Site for making new campgrounds, reviewing other campgrounds by commenting them, giving them grade.',
        img: yelp,
        madeWith: 'MEN Stack(Mongo DB with mongoose, Express and Node)',
        link: '//'
    },
    {
        id: 1,
        name: 'Projects Managment',
        desc: 'Add new project or project part, assign it to some registred user, se online/offline users',
        img: proManag,
        madeWith: 'FrontEnd(React, Tailwind CSS) & BackEnd(Firebase)',
        link: 'https://projectsmanagment-f43a4.web.app/'
    },
    {
        id: 2,
        name: 'Portfolio page',
        desc: 'Portfolio page for personal use',
        img: portfolio,
        madeWith: 'React, Tailwind CSS, Framer motion for animations',
        link: 'https://apuska.netlify.app/'
    },
    {
        id: 3,
        name: 'Movie App (frontend)',
        desc: 'Frontend for movie app',
        img: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/f7d7e1bdbee15362dc24f1de54f618c3?response-content-disposition=inline;+filename=%22image_fixed_width%22;+filename*=utf-8%27%27image_fixed_width&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX//////////wEaCXVzLXdlc3QtMiJGMEQCICnD3tCYHX2Vn/zkixNEoVUczdF2aLqNjXw%2BIcIbpVy%2BAiAIOM3cFIAxD2iPuPHjiR0Ad3qVFcQy16lC6%2B7BbD2YNCrWBAjd//////////8BEAAaDDczOTkzOTE3MzgxOSIMKZ21FdF%2B1%2Bpt7GI/KqoEBoG6F4jZmCsrpuo1%2BOnpx%2BVxSLD6AO%2Bo1/GKaBaFhvMjtbOM/1MrS7WqlLBR8y%2Bo673O1Z2aSCMQMt144lcqcqcRrNVt1aMY6xki3pj8ubxpNStdVoPRK5nmdq2Y%2BxZVvEOvBzcDANWJivIgpmBtCeL37/%2BXFMVjGiBW1nDRdTSy%2Bp1Xrdd4LxgIY7a5fl8C/Cy1B1LoyuJgfNBoMcgmsulOChbAWWAp2lX4yzdSELVcYbGL%2BP0cI3hrc2EEwcySe%2BW%2BkQNcH5nyzIl5/rK0VWixqHss4sKqdpbPvvEQv7KOb%2BgwG6FuRw7pMJsIdCC0ZdJdKvCtLNIpj/XCuNlaW7kufSfXnBlhJontAC3Uq9p4AmewqWVk%2BwLFjj39TwqSLWWtbt%2BH/ZwZ815tvSU2GQ1dQGAP4fAAlN6MnTgmgELAvsajoonj5LSCwMlO/IxCCyYNz75tmvMMvavm9l4VfpYFJ1IKipHzcEJdefG3al2MRA0pfF7uvnxHfqjvYdv2t4HzPiBQF6L%2BJUDiAa%2BL/i2fgE2NXz17EZ/XEKohCoz9s/OC5wwZiA%2BIm4N1n5X2GES3gizb72vvr7WutL9OC5EVEAhCRipXNsxh0EdR01vR6Te4%2BPXmLI7spdoU9vyMnVleI2RBN2/QqMRrIe%2BWqYpJLQS7F3ljkB3jPcAZ8EaGyzux39aFu/DL4pwMr9k5H611L8PIlqJe%2ByBAovKrMOApYBn5Qz3jBzQwzvuGngY6qAGFyjaNQL8KsuER56j0sEXzn75Vxhk%2Bv0KHRYPYr4FL1GU/3kq8alb9l8Vq8%2Bve0nh5F86p2WjQIrVHK50nPU6JitQ1JdsHKJ/BCapwFiWim4JwCsHuWO%2Bhdlil9mk68rPnsKT1dZKsY0o66Erec8tK82gNoIdQHKYo/tixMjy5HKRmb3NsO3zvV11gmS1nUXpDLiGUg5Qw08eMFO%2BJuMoDXcirh930QcM=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230113T222238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5W4K7HKGU/20230113/us-west-2/s3/aws4_request&X-Amz-Signature=a542e7e8033de80fdaa0fe11a717c305c6451f87630633c20a6caa4e1ed8e746',
        madeWith: 'React, Tailwind CSS',
        link: '//'
    },
    {
        id: 4,
        name: 'Vaktija Interactive Map',
        desc: 'Get Prayer Time for towns available in Vaktija.ba Api',
        img: vaktija,
        madeWith: 'React, Pure CSS, Mapbox, Vaktija Api',
        link: 'https://vaktijainteractivemap.netlify.app/'
    }
]