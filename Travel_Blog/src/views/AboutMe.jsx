import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutMe() {
  return (
    <>
      <div className="bg-ceu bg-cover min-h-screen text-black">
        <Navbar />
        <div className="mt-36">
          {/* Alinhamento consistente com largura fixa */}
          <div className="flex justify-center">
            <div className="w-[90rem] flex justify-between items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl">This is my story</h1>
                <p className="w-[40rem] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  minus, rem modi aperiam, nihil aspernatur dolores enim at,
                  quae voluptatum eligendi voluptas velit maxime. Alias eaque
                  quidem fugiat voluptatem perferendis!
                </p>
              </div>
              <img className="w-96" src="./public/images/me.jpg" alt="me" />
            </div>
          </div>

          <div className="flex justify-center mt-36">
            <div className="w-[90rem] flex justify-between items-center">
              <img className="w-96" src="./public/images/me.jpg" alt="me" />
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl">This is my story</h1>
                {/* Progress Bars */}
                <progress className="progress w-56" value={0} max="100">
                  hello
                </progress>
                <progress
                  className="progress w-56"
                  value="10"
                  max="100"
                ></progress>
                <progress
                  className="progress w-56"
                  value="40"
                  max="100"
                ></progress>
                <progress
                  className="progress w-56"
                  value="70"
                  max="100"
                ></progress>
                <progress
                  className="progress w-56"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-36 mb-36 w-[80rem]">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
