// This is a simple linear regression model for calorie prediction
// The coefficients are hypothetical and should be adjusted based on real data
export const predictCalories = (duration: number, intensity: number): number => {
  // Basic formula: calories = (duration * baseRate) * intensityMultiplier
  const baseRate = 7; // Average calories burned per minute at moderate intensity
  const intensityMultiplier = 0.5 * intensity + 0.5; // Scales from 1x to 3x based on intensity

  return duration * baseRate * intensityMultiplier;
};