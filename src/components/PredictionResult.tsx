interface PredictionResultProps {
  calories: number | null;
}

const PredictionResult = ({ calories }: PredictionResultProps) => {
  if (calories === null) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Predicted Calories</h2>
      <div className="text-4xl font-bold text-blue-500 text-center">
        {Math.round(calories)} kcal
      </div>
      <p className="mt-2 text-sm text-gray-500 text-center">
        This is an estimated value based on your input
      </p>
    </div>
  );
};

export default PredictionResult;