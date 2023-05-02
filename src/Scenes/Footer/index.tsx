import { Logo } from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            nostrum dolorum vel sapiente voluptate doloribus eius tenetur
            officiis, ipsam sint velit in dolor nulla optio mollitia. Nihil
            excepturi delectus totam!
          </p>
          <p>Evogym All Reserved</p>
        </div>
        <div className="basis-1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 ">Massa orci senatus</p>
          <p className="my-5 ">Loren dolor sit amet</p>
          <p>Ullamcoper vivamus</p>
        </div>
        <div className="basis-1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 ">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p>
          <p>(333)123123213</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
