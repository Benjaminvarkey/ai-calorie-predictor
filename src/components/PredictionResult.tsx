interface PredictionResultProps {
  calories: number | null;
  isCalculating?: boolean;
}

const PredictionResult = ({ calories, isCalculating }: PredictionResultProps) => {
  if (calories === null && !isCalculating) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Predicted Calories</h2>
      
      {isCalculating ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : calories !== null && (
        <div className="relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-blue-100 flex items-center justify-center animate-scale-in">
            <div className="text-4xl font-bold text-blue-500 animate-fade-in">
              {Math.round(calories)} 
              <span className="text-2xl">kcal</span>
            </div>
          </div>
        </div>
      )}
      
      <p className="mt-4 text-sm text-gray-500 text-center">
        {isCalculating 
          ? "Calculating your calories..."
          : "This is an estimated value based on your input"
        }
      </p>
    </div>
  );
};

export default PredictionResult;