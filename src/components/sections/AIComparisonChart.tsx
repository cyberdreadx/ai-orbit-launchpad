
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent animate-pulse" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            📊 The AI Advantage
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See the dramatic difference AI integration makes for businesses across key metrics
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 animate-fade-in hover:scale-[1.02]" style={{ animationDelay: '0.4s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>Business Performance Comparison</CardTitle>
            <div className="flex justify-center gap-8 text-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
                <div className="w-4 h-4 bg-red-500 rounded animate-pulse"></div>
                <span className="text-white/70">Without AI Integration</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
                <div className="w-4 h-4 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-white/70">With AI Integration</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <ChartContainer config={chartConfig} className="h-[500px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
                    <XAxis 
                      dataKey="metric" 
                      angle={-45}
                      textAnchor="end"
                      height={120}
                      interval={0}
                      tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
                    />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name, props) => [
                        `${value}${props.payload.unit}`,
                        name === 'without' ? 'Without AI' : 'With AI Integration'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="without" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#ef4444', strokeWidth: 2 }}
                      className="animate-fade-in"
                      style={{ animationDelay: '1.2s' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="with" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#22c55e', strokeWidth: 2 }}
                      className="animate-fade-in"
                      style={{ animationDelay: '1.4s' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <h4 className="text-white font-semibold mb-2 hover:text-green-200 transition-colors duration-200">{item.metric}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-300 hover:text-red-200 transition-colors duration-200">
                      {item.without}{item.unit}
                    </span>
                    <span className="text-white/50 animate-pulse">→</span>
                    <span className="text-green-300 font-bold hover:text-green-200 transition-colors duration-200">
                      {item.with}{item.unit}
                    </span>
                  </div>
                  <div className="text-xs text-white/50 mt-1 hover:text-white/70 transition-colors duration-200">
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
