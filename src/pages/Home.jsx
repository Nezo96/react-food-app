import React from 'react';
import NavBar from '../components/NavBar';
import HeaderText from '../components/HeaderText';
import bg_image from "../images/bg-image.jpg";
import Fotogallery from '../components/Fotogallery';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
        <div style={{background : `url(${bg_image})`,width : "100%",height : "550px",backgroundRepeat : "no-repeat",backgroundAttachment : "fixed",backgroundPosition : "center"}}>
            <NavBar />

            <div className="flex justify-center items-center content-center">
              <div className="mt-16">
                  <HeaderText font_weight={"font-semibold"} size="3xl" headerText="Mnamky Mého Tatky" color="white" underline={false} />
              </div>
            </div>


            <section id="fotogallery" className="mt-[75%] text-white sm:mt-[30%]">
              <HeaderText font_weight={"font-semibold"} size="2xl" headerText="Fotogalerie" color="black" underline={true} />
              <Fotogallery />
            </section>

            <Footer />

        </div>

        

    </div>

  )
}

export default Home;