import React, { useState } from 'react';

interface ScheduleFormData {
  departure: string;
  destination: string;
  passengerCount: number;
  luggageCount: number;
  details: string;
}

const ScheduleForm: React.FC = () => {
  const [formData, setFormData] = useState<ScheduleFormData>({
    departure: '',
    destination: '',
    passengerCount: 1,
    luggageCount: 0,
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'passengerCount' || name === 'luggageCount' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement schedule creation logic with AWS Amplify
    console.log('Schedule data:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Your Schedule</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
            Departure
          </label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter departure location"
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter destination"
          />
        </div>

        <div>
          <label htmlFor="passengerCount" className="block text-sm font-medium text-gray-700">
            Number of Passengers
          </label>
          <input
            type="number"
            id="passengerCount"
            name="passengerCount"
            min="1"
            value={formData.passengerCount}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="luggageCount" className="block text-sm font-medium text-gray-700">
            Number of Luggage Items
          </label>
          <input
            type="number"
            id="luggageCount"
            name="luggageCount"
            min="0"
            value={formData.luggageCount}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Additional Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={3}
            value={formData.details}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter any additional details"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm; 