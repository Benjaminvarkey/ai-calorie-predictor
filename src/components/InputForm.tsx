import { useState } from 'react';

interface InputFormProps {
  onSubmit: (duration: number, intensity: number) => void;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  const [duration, setDuration] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(Number(duration), intensity);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-md mx-auto border border-blue-100">
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
        <label htmlFor="intensity" className="block text-lg font-semibold text-gray-700 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Intensity Level
        </label>
        <input
          type="range"
          id="intensity"
          min="1"
          max="5"
          step="1"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span className={intensity === 1 ? 'text-blue-500' : ''}>Light</span>
          <span className={intensity === 2 ? 'text-blue-500' : ''}>Easy</span>
          <span className={intensity === 3 ? 'text-blue-500' : ''}>Medium</span>
          <span className={intensity === 4 ? 'text-blue-500' : ''}>Hard</span>
          <span className={intensity === 5 ? 'text-blue-500' : ''}>Intense</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md"
      >
        Calculate Calories
        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </form>
  );
};

export default InputForm;