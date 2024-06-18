

const DashboardContent = () => {
  return (
    <div className="flex flex-row justify-between mt-16 ml-64 mr-64">
      <div className="flex flex-col space-y-4 w-1/2 mr-2">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-300 text-black rounded shadow-md">
          <div className="mb-4">
            <h3 className="font-bold">Performance Statistic</h3>
            <p>Youre estimated to be in the top 20% of your peers.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-400 text-black rounded shadow-md">
          <div className="mb-4">
            <h3 className="font-bold">Recent Grades</h3>
            <ul>
              <li>Combat Training - De-escalation: 7.1</li>
              <li>Civilian Rights - Research: 6.3</li>
              <li>Public Law - Training Procedures: 7.6</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 ml-2 p-4 bg-gray-500 text-white rounded shadow-md">
        <div className="mb-4">
          <h3 className="font-bold">Notifications</h3>
          <ul>
            <li>General Alert: Webtest fl5 is now unlocked. Please visit the Resources section to view it.</li>
            <li>General Alert: Congratulations, youve now reached the top 20% of your grade!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
