import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

function AboutMe() {
  return (
    <>
      <Navbar />

      <div className="bg-white container mx-auto px-4 rounded-lg">
        <div className="flex flex-col text-justify md:flex-row justify-around gap-28 items-center my-12 mx-6 lg:mx-15">
          <div className="flex flex-col gap-2">
            <h3 className="mt-5 text-blue-600 sm:text-xl">Get to know me...</h3>
            <p className="indent-4 text-sm sm:text-base">
              I'm Antonio, a 26-year-old guy who is a passionate and adventurous
              traveler. This blog shares my personal experiences of amazing
              destinations around the world.
            </p>

            <h3 className="mt-5 text-blue-600 sm:text-xl">
              My Journey as a Traveler
            </h3>
            <p className="indent-4 text-sm sm:text-base">
              My travel journey began 8 years ago, when turn 18. Since then,
              I've accumulated a wealth of experiences in several
              countries/cities and am always seeking new adventures. This blog
              is my way of sharing these special moments with fellow travel
              enthusiasts.{" "}
            </p>

            <h3 className="mt-5 text-blue-600 sm:text-xl">
              What This Blog Offers
            </h3>
            <p className="indent-4 text-sm sm:text-base">
              On my website, you will find: several detailed information of the
              places I visited, from monuments to some history of these. You
              also have the opportunity to take notes on the main facts of each
              place, such as the local currency, climate, language and others.
            </p>

            <h3 className="mt-5 text-blue-600 sm:text-xl">
              My Experience and Expertise
            </h3>
            <p className="indent-4 text-sm sm:text-base">
              With 8 years of travel under my belt, I've gained practical
              knowledge that I share here. My approach is based on real
              experiences, not just theory. I hope to inspire others to explore
              beyond their comfort zones.
            </p>

            <h3 className="mt-5 text-blue-600 sm:text-xl">My Purpose</h3>
            <p className="indent-4 text-sm sm:text-base">
              My goal is to inspire you to step out of your comfort zone and
              explore the world. I want to show that the best adventures often
              lie off the beaten path and that each journey is an opportunity
              for growth and learning.
            </p>

            <p className="indent-4 text-sm sm:text-base">
              If you're ready to join me on this journey of discoveries and
              adventures, stay tuned! Follow me on social media for regular
              updates on new posts and exclusive tips.
            </p>
          </div>

          <div className="w-full">
            <img
              src="./images/me.jpg"
              alt="Author"
              className="w-full h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <p className="text-lg mt-20 text-center italic sm:text-xl md:text-2xl">
          "The world is a book, and those who do not travel read only one page."
        </p>

        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
