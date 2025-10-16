import { useState } from 'react';
import InputForm from './components/InputForm';
import PredictionResult from './components/PredictionResult';
import BackgroundAnimations from './components/BackgroundAnimations';
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
  };

  return (
    <div className="min-h-screen fitness-gradient relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <BackgroundAnimations />
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 animate-fade-in">
          Calorie Predictor
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your workout details to predict calories burned
        </p>
        
        <InputForm onSubmit={handlePrediction} />
        <PredictionResult calories={predictedCalories} isCalculating={isCalculating} />
      </div>
    </div>
  );
}

export default App;
