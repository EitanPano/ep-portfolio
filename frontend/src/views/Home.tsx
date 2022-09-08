import { NavButton } from '../components/smart/NavButton';

export const Home = () => {
    return (
        <div className="home main-layout background text">
            <h1 className="text-center">Eitan Pano</h1>
            
            <article className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                exercitationem tempore voluptatem soluta praesentium
                voluptatibus at. Reprehenderit sunt nam praesentium error totam,
                corrupti aspernatur ipsum nostrum, suscipit veritatis iure
                neque.
            </article>

            <div className='my-2 text-center'>
                <NavButton to={'/work'} className="round">My Work</NavButton>
            </div>
        </div>
    );
};
