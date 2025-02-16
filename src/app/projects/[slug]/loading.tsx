import CardSkeleton from "@/components/cardSkeleton";

const Loading = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="container px-6 py-12 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <CardSkeleton/>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-2 mt-6 lg:mt-0 lg:w-1/2">
            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
          </div>
        </div>
      </header>
      <section className="container px-6 py-4 mx-auto">
        <div className="xl:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <CardSkeleton/>
          </div>
          <div className="lg:col-span-1 mt-4 lg:mt-0">
            <CardSkeleton/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loading;