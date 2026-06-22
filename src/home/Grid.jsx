import style from "./Grid.module.css";

const Grid = () => {
  return (
    <>
      <div className={style.grid}>
        <div className={style.item1}>
          <img src="/grid1.png" alt="Image of a phone" />
          <h2>Flagship Smartphones</h2>
          <p>
            This phone is simple and reliable. It works great for your daily
            needs. The screen is large and bright. You can see everything
            clearly. It is easy on your eyes. The design is clean and modern. It
            feels good in your hand. It is not heavy at all. The glass is very
            strong. It resists scratches from daily use. The battery lasts all
            day long. You do not need to charge it often. It charges up very
            fast too. It runs your apps quickly. There is no slow down. You can
            switch between apps easily. The setup is very fast. Anyone can use
            it right away. The camera takes very sharp pictures. Your photos
            will look great. It works well in low light. It also records smooth
            video. It has a lot of storage space. You can keep all your files
            safe. You can download many apps. There is room for everything. The
            speakers are loud and clear. You can hear your calls perfectly. The
            signal stays strong everywhere. It connects to wifi instantly. This
            device is built to last. It is a solid choice for work. It is a
            solid choice for life.
          </p>
        </div>
        <div className={style.item2}>
          <img src="/grid3.png" alt="Image of a phone" />
          <h2>VR Headset</h2>
          <p>
            This VR headset is light and comfortable. It gives you a clear view.
            It works without any cables. The setup is very easy. It has great
            sound built inside. The straps adjust to fit you perfectly. The
            lenses stay clear while you use it. It tracks your moves very fast.
            You can enjoy games and videos instantly. The battery keeps it
            running for hours.
          </p>
        </div>
        <div className={style.item3}>
          <img src="/grid2.png" alt="Image of a phone" />
          <h2>Wireless Earbuds</h2>
          <p>
            These earbuds are small and light. They fit perfectly in your ears.
            The sound is very clear and sharp. They block out outside noise
            completely. The wireless connection is very stable. The battery
            lasts for many hours. The charging case is small too. It fits right
            into your pocket.
          </p>
        </div>
        <div className={style.item4}>
          <img src="/grid5.png" alt="Image of a phone" />
          <h2>Smart Watch</h2>
          <p>
            This watch is sleek and light. It sits comfortably on your wrist.
            The screen is bright and clear. It tracks your steps all day. It
            shows your notifications instantly. The battery lasts for a week.
            The glass is strong against scratches. It connects to your phone
            easily.
          </p>
        </div>
        <div className={style.item5}>
          <img src="/grid6.png" alt="Image of a phone" />
          <h2>Mechanical Keyboard</h2>
          <p>
            This keyboard is very strong. It is made for daily typing. The keys
            feel great when you press them. They make a nice clean sound. The
            design is simple and neat. It fits perfectly on your desk. It
            connects to your computer instantly. The letters stay clear and
            never fade. It helps you type much faster. It is very comfortable
            for your wrists. It is a solid tool for your daily work.
          </p>
        </div>
        <div className={style.item6}>
          <img src="/grid4.png" alt="Image of a phone" />
          <h2>Wireless Conrtoller</h2>
          <p>
            This controller is very comfortable to hold. It fits perfectly in
            your hands. The grip stops it from slipping. The buttons are quick
            and responsive. The sticks move very smoothly. You get total control
            over your movements. Every single click feels sharp and solid. It
            connects to your device instantly. The wireless signal stays strong.
            There is no lag when you play. It works great with all your favorite
            games. The battery lasts for many days. It charges up very fast too.
            This device is built to last a long time. It is a perfect tool for
            gaming.
          </p>
        </div>
      </div>
    </>
  );
};

export default Grid;
