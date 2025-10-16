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
  // Removed unused calories state
  const [foodDescription, setFoodDescription] = useState<string>('');

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
          foodDescription,
          timestamp: Date.now()
        });
        setName('');
        setDuration('');
        setIntensity(1);
        setFoodDescription('');
      } catch (error) {
        console.error('Error saving entry:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-md mx-auto border border-blue-100 hover:shadow-xl transition-all duration-300">
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
        <label htmlFor="foodDescription" className="block text-lg font-semibold text-gray-700 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Food Description
        </label>
        <input
          type="text"
          id="foodDescription"
          value={foodDescription}
          onChange={(e) => setFoodDescription(e.target.value)}
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          required
          placeholder="Enter food items eaten"
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
          className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer hover:bg-blue-200 transition-colors duration-200
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:hover:bg-blue-600 [&::-webkit-slider-thumb]:transition-all 
            [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:scale-125"
        />
        <div className="flex flex-wrap justify-between text-sm font-medium text-gray-600 gap-2">
          <span className={`px-3 py-1.5 rounded-full transition-all duration-300 transform ${
            intensity === 1 ? 'text-blue-500 bg-blue-50 scale-110' : 'hover:bg-gray-50'
          }`}>
            Light <span className="inline-block transition-transform duration-300 hover:scale-125">{intensityEmojis[0]}</span>
          </span>
          <span className={`px-3 py-1.5 rounded-full transition-all duration-300 transform ${
            intensity === 2 ? 'text-blue-500 bg-blue-50 scale-110' : 'hover:bg-gray-50'
          }`}>
            Easy <span className="inline-block transition-transform duration-300 hover:scale-125">{intensityEmojis[1]}</span>
          </span>
          <span className={`px-3 py-1.5 rounded-full transition-all duration-300 transform ${
            intensity === 3 ? 'text-blue-500 bg-blue-50 scale-110' : 'hover:bg-gray-50'
          }`}>
            Medium <span className="inline-block transition-transform duration-300 hover:scale-125">{intensityEmojis[2]}</span>
          </span>
          <span className={`px-3 py-1.5 rounded-full transition-all duration-300 transform ${
            intensity === 4 ? 'text-blue-500 bg-blue-50 scale-110' : 'hover:bg-gray-50'
          }`}>
            Hard <span className="inline-block transition-transform duration-300 hover:scale-125">{intensityEmojis[3]}</span>
          </span>
          <span className={`px-3 py-1.5 rounded-full transition-all duration-300 transform ${
            intensity === 5 ? 'text-blue-500 bg-blue-50 scale-110' : 'hover:bg-gray-50'
          }`}>
            Intense <span className="inline-block transition-transform duration-300 hover:scale-125">{intensityEmojis[4]}</span>
          </span>
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