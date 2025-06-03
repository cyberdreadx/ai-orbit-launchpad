
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const AIComparisonChart = () => {
  const comparisonData = [
    {
      metric: "Response Time",
      without: 24,
      with: 2,
      unit: "hours"
    },
    {
      metric: "Customer Satisfaction",
      without: 65,
      with: 89,
      unit: "%"
    },
    {
      metric: "Operational Efficiency",
      without: 45,
      with: 85,
      unit: "%"
    },
    {
      metric: "Monthly Revenue Growth",
      without: 5,
      with: 23,
      unit: "%"
    },
    {
      metric: "Employee Productivity",
      without: 60,
      with: 90,
      unit: "%"
    }
  ];

  const chartConfig = {
    without: {
      label: "Without AI",
      color: "#ef4444"
    },
    with: {
      label: "With AI Integration",
      color: "#22c55e"
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            📊 The AI Advantage
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See the dramatic difference AI integration makes for businesses across key metrics
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-4">Business Performance Comparison</CardTitle>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-white/70">Without AI Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-white/70">With AI Integration</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="metric" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value, name, props) => [
                      `${value}${props.payload.unit}`,
                      name === 'without' ? 'Without AI' : 'With AI Integration'
                    ]}
                  />
                  <Bar dataKey="without" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="with" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="text-white font-semibold mb-2">{item.metric}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-300">
                      {item.without}{item.unit}
                    </span>
                    <span className="text-white/50">→</span>
                    <span className="text-green-300 font-bold">
                      {item.with}{item.unit}
                    </span>
                  </div>
                  <div className="text-xs text-white/50 mt-1">
                    +{item.metric === "Response Time" ? 
                      Math.round(((item.without - item.with) / item.without) * 100) :
                      item.with - item.without
                    }{item.metric === "Response Time" ? "% faster" : item.unit + " improvement"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIComparisonChart;
