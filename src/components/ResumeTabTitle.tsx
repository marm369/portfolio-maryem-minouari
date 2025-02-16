const ResumeTabTitle = (
  { tab, selectedTab, handleClick }:
    {tab: string, selectedTab: string, handleClick: () => void}
) => {
  return (
    <span onClick={handleClick}
          className={`block px-16 py-4 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer 
          ${tab === selectedTab ? 'bg-blue-100 dark:bg-gray-700' : ''}`}>
      <h3 className="text-md font-semibold text-gray-700 capitalize dark:text-white">
        {tab}
      </h3>
    </span>
  );
};

export default ResumeTabTitle;
