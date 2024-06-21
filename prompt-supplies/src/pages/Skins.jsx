import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles/styles.module.css";
import PhoneCardsStack from "../components/PhoneCardsStack";

export default function App() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <p className={styles.scrollText}>Welcome to V-Skins</p>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.sticky}`}>
            <div className="relative  w-72 h-96 bg-transparent rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/83/58/1e/83581e27e3ae8cf2415c7168faad7286.jpg"
                alt=""
                className="h-full  object-cover"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            backgroundColor: "blue",
          }}
        >
          <div className={`${styles.parallax} ${styles.purple} relative`}>
            <h2 className=" z-40 text-white absolute top-1/2 transform -translate-y-full text-3xl font-bold text-center w-full">
              Our Collection
            </h2>
            <h2 className=" z-40 text-black absolute top-1/2 left-1 transform -translate-y-full text-3xl font-bold text-center w-full">
              Our Collection
            </h2>

            <PhoneCardsStack />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          className=" bg-black"
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Upload a custom design</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.5}
          className=" bg-amber-500"
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Coprate/Bulk Orders</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
