import Image from 'next/image';

import classes from './hero.module.css';
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='https://miro.medium.com/v2/resize:fit:2400/1*AFABlTwUYwBJNYGTURmfXw.jpeg'
                    alt='An image showing Max'
                    width={300}
                    height={300}
                    priority={true}
                />
            </div>
            <h1>Hi, I am Nohim</h1>
            <p>
                I blog about technology - My expertise areas are ReactJS, NodeJS, AWS & SpringBoot.
            </p>
        </section>
    );
}
export default Hero;