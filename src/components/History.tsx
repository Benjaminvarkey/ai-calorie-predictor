import { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

interface CalorieEntry {
  name: string;
  calories: number;
  foodDescription: string;
  duration: number;
  intensity: number;
  timestamp: number;
}

const History = () => {
  const [entries, setEntries] = useState<CalorieEntry[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchEntries = async () => {
    setIsRefreshing(true);
    try {
      const q = query(collection(db, 'calorieEntries'));
      const querySnapshot = await getDocs(q);
      const entriesData: CalorieEntry[] = [];
      querySnapshot.forEach((doc) => {
        entriesData.push(doc.data() as CalorieEntry);
      });
      // Sort by timestamp in descending order
      entriesData.sort((a, b) => b.timestamp - a.timestamp);
      setEntries(entriesData);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">History</h2>
        <button
          onClick={fetchEntries}
          disabled={isRefreshing}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50"
        >
          <svg
            className={`w-5 h-5 mr-2 ${isRefreshing ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      <div className="space-y-4">
        {entries.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No entries yet. Start by adding your first calorie entry!
          </div>
        ) : (
          entries.map((entry, index) => (
            <div
              key={index}
              className="bg-white/50 p-6 rounded-lg shadow-sm border border-blue-50 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
                <span className="text-blue-600 font-bold text-lg">
                  {entry.calories} calories
                </span>
              </div>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Food:</span> {entry.foodDescription}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <span className="font-medium">Duration:</span> {entry.duration} minutes
                </p>
                <p>
                  <span className="font-medium">Intensity:</span> {entry.intensity}/5
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(entry.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;