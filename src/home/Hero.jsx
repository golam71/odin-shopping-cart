import style from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.text}>
          <h1>Best in class Headphones</h1>
          <p>
            Designed for everyday listening with clear sound and a comfortable
            fit. Lightweight construction makes it easy to wear for extended
            periods.
          </p>
        </div>
        <img src="/hero.png" alt="Image of a Headphone" />
      </div>
    </>
  );
};

export default Hero;
