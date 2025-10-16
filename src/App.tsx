import { useState } from 'react';
import InputForm from './components/InputForm';
import PredictionResult from './components/PredictionResult';
import { predictCalories } from './utils/caloriePredictor';

function App() {
  const [predictedCalories, setPredictedCalories] = useState<number | null>(null);

  const handlePrediction = (duration: number, intensity: number) => {
    const calories = predictCalories(duration, intensity);
    setPredictedCalories(calories);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Calorie Predictor
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your workout details to predict calories burned
        </p>
        
        <InputForm onSubmit={handlePrediction} />
        <PredictionResult calories={predictedCalories} />
      </div>
    </div>
  );
}

export default App;
