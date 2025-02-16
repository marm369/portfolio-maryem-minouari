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
            <div className="flex flex-col items-center p-8">
              <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-32 h-32 my-2 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
              <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
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