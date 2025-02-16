import CardSkeleton from "@/components/cardSkeleton";
import Title from "@/components/Title";

const Loading = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Title>Projects</Title>
        <p className="mt-4  text-gray-500 dark:text-gray-300">
          Take a look at some of my recent projects.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({length: 9}).map((_, index) => (
          <CardSkeleton key={index}/>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Loading;