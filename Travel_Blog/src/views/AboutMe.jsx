import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

function AboutMe() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around gap-10 items-center mt-10 my-12 mx-6 lg:mx-24">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p>Get to know me</p>
            <p className="mt-5">
              I'm Antonio, a passionate traveler and adventure-seeker. This blog
              shares my personal experiences from incredible destinations around
              the world, offering practical tips and insights on how you can
              have your own thrilling adventures.
            </p>

            <h3 className="mt-10 text-xl text-blue-600">
              My Journey as a Traveler
            </h3>
            <p>
              My travel journey began [number] years ago, when [brief story].
              Since then, I've accumulated a wealth of experiences in [number]
              countries/cities and am always seeking new adventures. This blog
              is my way of sharing these special moments with fellow travel
              enthusiasts.{" "}
            </p>

            <h3 className="mt-10 text-xl text-blue-600">
              What This Blog Offers
            </h3>
            <p>
              On my site, you'll find: Detailed travel accounts, including
              practical tips and unique insights. Travel guides based on
              personal experiences. Resources on how to plan semi-annual or
              annual adventures. Reflections on culture, nature, and people I've
              encountered along the way.
            </p>

            <h3 className="mt-10 text-xl text-blue-600">
              My Experience and Expertise
            </h3>
            <p>
              With [number] years of travel under my belt, I've gained practical
              knowledge that I share here. My approach is based on real
              experiences, not just theory. I hope to inspire others to explore
              beyond their comfort zones.
            </p>

            <h3 className="mt-10 text-xl text-blue-600">My Purpose</h3>
            <p>
              My goal is to inspire you to step out of your comfort zone and
              explore the world. I want to show that the best adventures often
              lie off the beaten path and that each journey is an opportunity
              for growth and learning.
            </p>

            <p>
              If you're ready to join me on this journey of discoveries and
              adventures, stay tuned! Follow me on social media or subscribe to
              the newsletter for regular updates on new posts and exclusive
              tips.
            </p>
          </div>

          <div className="w-full h[15rem] sm:h[20rem] lg:[30rem] lg:h-[25rem]">
            <img
              src="./images/me.jpg"
              alt="Author"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="text-2xl mt-10 text-center">
          "The world is a book, and those who do not travel read only one page."
        </h3>

        <div className="mt-10">
          <Gallery />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
