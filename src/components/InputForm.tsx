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
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <div className="space-y-2">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Duration (minutes)
        </label>
        <input
          type="number"
          id="duration"
          min="0"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">
          Intensity Level (1-5)
        </label>
        <input
          type="range"
          id="intensity"
          min="1"
          max="5"
          step="1"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Predict Calories
      </button>
    </form>
  );
};

export default InputForm;