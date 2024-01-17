import React from "react";
import Button from "../layouts/Button";
import AutoTypingText from "./AutoTypingText";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to You <AutoTypingText text="Revitalize Physiotherapy" />
        </h1>
        
        <p className="pb-10">
        Revitalize Physiotherapy is a dedicated space where your journey to optimal well-being begins. Our studio is committed to revitalizing your body and promoting overall health through personalized physiotherapy sessions. Our experienced team of professionals combines modern techniques with a holistic approach to help you regain strength, flexibility, and balance. At Revitalize Physiotherapy, we believe in empowering you on your path to recovery, ensuring a revitalized and active lifestyle. Discover the transformative benefits of physiotherapy in a welcoming and nurturing environment.
        </p>
        <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="mt-6 hover:text-hoverColor transition-all cursor-pointer"
            >
        <Button title="See Services" />
        </Link>
      </div>
      {/* <div className="social-link-list">
  <ul>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-facebook-f" /><span>Facebook</span></a></li>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-twitter" /><span>Twitter</span></a></li>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-instagram" /><span>Instagram</span></a></li>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-linkedin-in" /><span>Linkedin</span></a></li>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-github" /><span>Github</span></a></li>
    <li><a href="#"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="fab fa-youtube" /><span>Youtube</span></a></li>
  </ul>
</div> */}

    </div>
  );
};

export default Home;
