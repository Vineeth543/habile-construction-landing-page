import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-yellow-200 w-full py-10">
        <div className="container mx-auto flex flex-col">
          <h3 className="text-gray-500 font-semibold text-xl text-center">
            LATEST NEWS
          </h3>
          <h2 className="text-6xl font-semibold text-center">From Our Blog</h2>
          <div className="flex mt-16 mx-20 gap-28">
            <div className="flex flex-col">
              <div className="flex gap-5 relative">
                <div className="w-[37rem] h-[25rem] absolute -top-4 -left-4">
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"
                    alt="interior-designer-or-decorator-make-your-choice-1"
                    className="h-full w-full shadow-2xl"
                    style={{ borderRadius: "120px 0px" }}
                  />
                </div>
                <div
                  className="w-[37rem] h-[25rem] border-2 border-red-500 shadow-lg"
                  style={{ borderRadius: "120px 0px" }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <h3 className="mt-4 text-2xl font-semibold">
                  2020 Interior Design Trends
                </h3>
                <p className="text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, obcaecati ratione officiis voluptatem possimus mollitia
                  ea corporis quam enim delectus quidem, est quos vero!
                  Asperiores ipsum maiores voluptas minus dolores!
                </p>
                <button
                  className="flex px-4 py-2 w-fit bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring focus:ring-red-300 outline-none"
                  style={{ borderRadius: "20px 0px" }}
                >
                  CONTINUE READING
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-5 relative">
                <div className="w-[37rem] h-[25rem] absolute -top-4 -left-4">
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"
                    alt="interior-designer-or-decorator-make-your-choice-1"
                    className="h-full w-full shadow-2xl"
                    style={{ borderRadius: "120px 0px" }}
                  />
                </div>
                <div
                  className="w-[37rem] h-[25rem] border-2 border-red-500 shadow-lg"
                  style={{ borderRadius: "120px 0px" }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <h3 className="mt-4 text-2xl font-semibold">
                  28 Notable Product at ARC Interior Design
                </h3>
                <p className="text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, obcaecati ratione officiis voluptatem possimus mollitia
                  ea corporis quam enim delectus quidem, est quos vero!
                  Asperiores ipsum maiores voluptas minus dolores!
                </p>
                <button
                  className="flex px-4 py-2 w-fit bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring focus:ring-red-300 outline-none"
                  style={{ borderRadius: "20px 0px" }}
                >
                  CONTINUE READING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
