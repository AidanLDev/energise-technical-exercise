declare module "*.csv" {
  const value: Array<{ Week: number; tCO2e: number }>;
  export default value;
}