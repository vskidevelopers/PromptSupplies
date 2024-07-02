import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles/styles.module.css";
import PhoneCardsStack from "../components/PhoneCardsStack";
import { Link } from "react-router-dom";
import SkinCarousel from "@/components/SkinCarousel";

export default function Skins() {
  const alignCenter = { display: "flex", alignItems: "center", width: "100vw" };
  const images = [
    "https://i.pinimg.com/736x/ff/08/03/ff0803c75b942fa5bf4380559f8292d1.jpg",
    "https://i.pinimg.com/564x/4b/73/7d/4b737d486767049b10fe05f6a248c6f8.jpg",
    "https://i.pinimg.com/564x/15/52/cd/1552cddf58de9cfccc8dc214733346cc.jpg",
    "https://i.pinimg.com/564x/c9/65/40/c965404ea4227cfe9cc9d992b925da89.jpg",
    "https://i.pinimg.com/564x/56/d2/4a/56d24a603df2d5cfacd5dff371c9de46.jpg",
    "https://i.pinimg.com/564x/71/3c/74/713c74d362003e18c70327c667474998.jpg",
    "https://i.pinimg.com/564x/c3/c9/37/c3c937798c8eca1b19b52fbbe3353a22.jpg",
    "https://i.pinimg.com/564x/4a/fe/47/4afe473cf41a74f8f5687a157abec750.jpg",
  ];

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
          {/* 3DSkinCarousel */}
          <SkinCarousel images={images} />
          <p className={styles.scrollText}>Welcome to V-Skins</p>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start", width: "50%" }}
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

        <Link to="collections">
          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: "flex-end",
              backgroundColor: "blue",
            }}
          >
            <div
              className={`${styles.parallax} ${styles.purple} relative z-50`}
            >
              <div>
                <h2 className=" z-40 text-white absolute top-1/2 transform -translate-y-full text-3xl font-bold text-center w-full">
                  Our Collection
                </h2>
                <h2 className=" z-40 text-black absolute top-1/2 left-1 transform -translate-y-full text-3xl font-bold text-center w-full">
                  Our Collection
                </h2>

                <PhoneCardsStack />
              </div>
            </div>
          </ParallaxLayer>
        </Link>

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
