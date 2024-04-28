// Function to handle search change
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Defining the props for the LanguagesChart component
type LanguagesChartProps = {
  languages: { [key: string]: number };
};

// Defining the colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#653CAD", "#AD653C", "#3CAD65"];

// LanguagesChart component
const LanguagesChart: React.FC<LanguagesChartProps> = ({ languages }) => {
  // Transforming the languages object into an array of objects
  const languagesData = Object.entries(languages).map(([name, value]) => ({ name, value: Number(value) }));

  return (
    // ResponsiveContainer makes the chart responsive
    <ResponsiveContainer width="90%" height="80%">
      <PieChart>
        <Pie innerRadius={100} outerRadius={200} data={languagesData} labelLine={true} fill="#8884d8" dataKey="value">
          {languagesData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LanguagesChart;
