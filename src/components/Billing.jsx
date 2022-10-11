import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] w-[50%] h-[50%] rounded-full white__gradient top-0 -left-1/2" />
      <div className="absolute z-[3] w-[50%] h-[50%] rounded-full pink__gradient bottom-0 -left-1/2" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easly control Your Billing <br className="sm:block hidden" />
        Billing and Invoicing.
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, fuga
          architecto. Saepe ipsam, qui iure molestiae cupiditate recusandae
          velit. Sint in soluta amet ex asperiores, voluptatum assumenda
          molestiae tempora excepturi!
        </p>
        <div className="flex flex-row flex-wrap ms:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_store"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </h2>
    </div>
  </section>
);

export default Billing;
