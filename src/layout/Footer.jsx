import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerDiv}>
          <div className={style.footerFont}>Odin Cart</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
