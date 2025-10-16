import { useState } from 'react';
import InputForm from './components/InputForm';
import PredictionResult from './components/PredictionResult';
import BackgroundAnimations from './components/BackgroundAnimations';
import History from './components/History';
import { predictCalories } from './utils/caloriePredictor';

function App() {
  const [predictedCalories, setPredictedCalories] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handlePrediction = async (duration: number, intensity: number) => {
    setIsCalculating(true);
    setPredictedCalories(null);
    
    // Simulate a small delay for the animation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const calories = predictCalories(duration, intensity);
    setPredictedCalories(calories);
    setIsCalculating(false);
    return calories;
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
      <BackgroundAnimations />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-fade-in">
            Calorie Predictor
          </h1>
          <p className="text-gray-600 text-lg mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Track Your Fitness Journey
          </p>
          <div className="flex items-center justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Smart
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Accurate
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fast
            </span>
          </div>
        </div>
        
        <InputForm onSubmit={handlePrediction} />
        <PredictionResult calories={predictedCalories} isCalculating={isCalculating} />
        <History />
      </div>
    </div>
  );
}

export default App;
