import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

interface InputFormProps {
  onSubmit: (duration: number, intensity: number) => number | Promise<number>;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  const intensityEmojis = ['🚶', '🏃', '🏃‍♂️', '🏋️', '🦾'];
  const [duration, setDuration] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(1);
  const [name, setName] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedCalories = await onSubmit(Number(duration), intensity);

    if (name && calculatedCalories) {
      try {
        await addDoc(collection(db, 'calorieEntries'), {
          name,
          calories: calculatedCalories,
          duration: Number(duration),
          intensity,
          timestamp: Date.now()
        });
        setName('');
        setDuration('');
        setIntensity(1);
      } catch (error) {
        console.error('Error saving entry:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-100 hover:shadow-xl transition-all duration-300 w-full">
      <div className="space-y-3">
        <label htmlFor="name" className="block text-lg font-semibold text-gray-700 flex items-center group">
          <svg className="w-5 h-5 mr-2 text-blue-500 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-200 transform hover:-translate-y-0.5"
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="duration" className="block text-lg font-semibold text-gray-700 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Duration (minutes)
        </label>
        <input
          type="number"
          id="duration"
          min="0"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          required
          placeholder="Enter workout duration"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-lg font-semibold text-gray-700 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Intensity Level
        </label>
        <div className="mt-2">
          <div className="grid grid-cols-5 gap-3">
            {['Light', 'Easy', 'Medium', 'Hard', 'Intense'].map((label, index) => (
              <button
                key={label}
                type="button"
                className={`group relative flex flex-col items-center justify-center p-3 rounded-xl 
                  cursor-pointer min-w-[80px] border-2 transition-[transform,shadow,border-color] duration-200 
                  ${intensity === index + 1 
                    ? 'bg-gradient-to-b from-blue-50 to-blue-100/50 border-blue-400 text-blue-600 shadow-md scale-[1.02]' 
                    : 'border-gray-100 hover:border-blue-200 text-gray-600 hover:text-gray-800 hover:shadow hover:-translate-y-0.5'
                  }`}
                onClick={() => setIntensity(index + 1)}
              >
                <span className={`text-2xl mb-2 transition-transform duration-200 ease-out
                  ${intensity === index + 1 ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {intensityEmojis[index]}
                </span>
                <span className="text-sm font-medium leading-none whitespace-nowrap">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="group relative w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
          hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md 
          hover:shadow-xl active:scale-95 overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center">
          Calculate Calories
          <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
    </form>
  );
};

export default InputForm;