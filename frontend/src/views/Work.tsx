import { NavButton } from '../components/smart/NavButton';

export const Work = () => {
    const items = [
        {
            img: 'imgUrl/Path',
            name: 'projectName',
            technologies: ['react', 'vue', 'angular'],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                exercitationem tempore voluptatem soluta praesentium
                voluptatibus at. Reprehenderit sunt nam praesentium error totam,
                corrupti aspernatur ipsum nostrum, suscipit veritatis iure
                neque.`,
            link: 'https://google.com/',
        },
        {
            img: 'imgUrl/Path',
            name: 'projectName',
            technologies: ['react', 'vue', 'angular'],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                exercitationem tempore voluptatem soluta praesentium
                voluptatibus at. Reprehenderit sunt nam praesentium error totam,
                corrupti aspernatur ipsum nostrum, suscipit veritatis iure
                neque.`,
            link: 'https://google.com/',
        },
        {
            img: 'imgUrl/Path',
            name: 'projectName',
            technologies: ['react', 'vue', 'angular'],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                exercitationem tempore voluptatem soluta praesentium
                voluptatibus at. Reprehenderit sunt nam praesentium error totam,
                corrupti aspernatur ipsum nostrum, suscipit veritatis iure
                neque.`,
            link: 'https://google.com/',
        },
        {
            img: 'imgUrl/Path',
            name: 'projectName',
            technologies: ['react', 'vue', 'angular'],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                exercitationem tempore voluptatem soluta praesentium
                voluptatibus at. Reprehenderit sunt nam praesentium error totam,
                corrupti aspernatur ipsum nostrum, suscipit veritatis iure
                neque.`,
            link: 'https://google.com/',
        },
    ];

    if (!items) return null;
    return (
        <div className="work main-layout background text">
            <h1>My Work</h1>

            <WorkList items={items}></WorkList>
            <div className='my-2 text-center'>
                <NavButton to='/contact' className="btn round">Contact Me</NavButton>
            </div>
        </div>
    );
};

const WorkList = ({ items }: any) => {
    return (
        <section className="grid-container">
            {items.map((item: any, idx: any) => {
                return <WorkPreview item={item} key={idx}></WorkPreview>;
            })}
        </section>
    );
};

const WorkPreview = ({ item }: any) => {
    const { imgUrl, name, description, technologies, link } = item;

    return (
        <CardPreview
            img={imgUrl}
            title={name}
            description={description}
            labels={technologies}
            link={link}
        ></CardPreview>
    );
};

const CardPreview = ({ imgUrl, title, description, labels, link }: any) => {
    return (
        <article className="card-preview full">
            <img src={imgUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Labels>{labels}</Labels>
            <a href={link}>{link}</a>
        </article>
    );
};

const Labels = ( {labels, children} : any) => {
    
    const labelsToRender = (labels && labels.length)
        ? labels : (children && children.length)
        ? children : null;

    if (!labelsToRender) return null;
    return (
        <div className='labels'>
            {labelsToRender.map((label: any, idx: any) => {
                return <label className='label' key={idx}>{label}</label>;
            })}
        </div>
    )
};
