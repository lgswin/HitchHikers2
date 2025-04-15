import React, { useState, useEffect } from 'react';

interface Schedule {
  id: string;
  departure: string;
  destination: string;
  passengerCount: number;
  luggageCount: number;
  details: string;
  createdAt: string;
}

const MySchedules: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch schedules from AWS Amplify
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
            },
            {
              id: '2',
              departure: 'Incheon',
              destination: 'Gangneung',
              passengerCount: 1,
              luggageCount: 1,
              details: 'Early morning departure',
              createdAt: new Date().toISOString(),
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Schedules</h2>
      
      {schedules.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">You don't have any schedules yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {schedule.departure} → {schedule.destination}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(schedule.createdAt).toLocaleDateString()}
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
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  View Requests
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySchedules; 