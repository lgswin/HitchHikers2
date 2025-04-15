import React, { useState, useEffect } from 'react';

interface Schedule {
  id: string;
  departure: string;
  destination: string;
  passengerCount: number;
  luggageCount: number;
  details: string;
  createdAt: string;
  userId: string;
  userName: string;
}

const AllSchedules: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    departure: '',
    destination: '',
  });

  useEffect(() => {
    // TODO: Fetch all schedules from AWS Amplify
    // This is a mock implementation
    const fetchSchedules = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockSchedules: Schedule[] = [
            {
              id: '1',
              departure: 'Seoul',
              destination: 'Busan',
              passengerCount: 2,
              luggageCount: 3,
              details: 'Need a comfortable ride',
              createdAt: new Date().toISOString(),
              userId: 'user1',
              userName: 'John Doe',
            },
            {
              id: '2',
              departure: 'Incheon',
              destination: 'Gangneung',
              passengerCount: 1,
              luggageCount: 1,
              details: 'Early morning departure',
              createdAt: new Date().toISOString(),
              userId: 'user2',
              userName: 'Jane Smith',
            },
            {
              id: '3',
              departure: 'Daegu',
              destination: 'Jeju',
              passengerCount: 3,
              luggageCount: 4,
              details: 'Family trip',
              createdAt: new Date().toISOString(),
              userId: 'user3',
              userName: 'Bob Johnson',
            },
          ];
          setSchedules(mockSchedules);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching schedules:', error);
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredSchedules = schedules.filter((schedule) => {
    return (
      schedule.departure.toLowerCase().includes(filter.departure.toLowerCase()) &&
      schedule.destination.toLowerCase().includes(filter.destination.toLowerCase())
    );
  });

  const handleRequestRide = (scheduleId: string) => {
    // TODO: Implement request ride logic with AWS Amplify
    console.log('Requesting ride for schedule:', scheduleId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Available Schedules</h2>
      
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
              Filter by Departure
            </label>
            <input
              type="text"
              id="departure"
              name="departure"
              value={filter.departure}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter departure city"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Filter by Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={filter.destination}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter destination city"
            />
          </div>
        </div>
      </div>
      
      {filteredSchedules.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No schedules match your filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchedules.map((schedule) => (
            <div key={schedule.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {schedule.departure} → {schedule.destination}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Posted by: {schedule.userName}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Passengers:</span>
                  <span className="font-medium">{schedule.passengerCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Luggage:</span>
                  <span className="font-medium">{schedule.luggageCount}</span>
                </div>
                {schedule.details && (
                  <div className="mt-4">
                    <span className="text-gray-600">Details:</span>
                    <p className="mt-1 text-sm">{schedule.details}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleRequestRide(schedule.id)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Request Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSchedules; 