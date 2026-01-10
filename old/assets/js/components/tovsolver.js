Math.PI * radius ** 3 * pressure / (c ** 2))) /
    (radius * (radius - 2 * G * mass / (c ** 2)))
);

const dMdr = 4 * Math.PI * radius ** 2 * density;

pressure += dPdr * dr;
mass += dMdr * dr;
radius += dr;

if (pressure <= 0) break;

density = eos(pressure, true); // Adjust density based on pressure if needed
results.push({ radius, mass });
}

return results;
};

const TOVSolverApp = () => {
    const [rhoCentral, setRhoCentral] = useState(1e15); // Default central density in g/cm^3
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Example equation of state (polytropic)
    const eos = (x, inverse = false) => {
        const K = 1e5; // Polytropic constant
        const gamma = 2; // Polytropic index
        return inverse ? Math.pow(x / K, 1 / gamma) : K * Math.pow(x, gamma);
    };

    const handleSolve = () => {
        setLoading(true);
        const results = solveTOV(eos, parseFloat(rhoCentral));
        setData({
            labels: results.map((point) => point.radius.toFixed(2)),
            datasets: [
                {
                    label: "Mass-Radius Curve",
                    data: results.map((point) => ({ x: point.radius, y: point.mass })),
                    borderColor: "#4caf50",
                    backgroundColor: "rgba(76, 175, 80, 0.2)",
                },
            ],
        });
        setLoading(false);
    };

    return (
            <div className="p-6">
                  <h1 className="text-xl font-bold mb-4">TOV Solver</h1>
                  <Card>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <div>
            <label className="block mb-2 font-medium">Central Density (g/cm³):</label>
                          <Input
                        type="number"
        value={rhoCentral}
        onChange={(e) => setRhoCentral(e.target.value)}
                        step="1e14"
                      />
                        </div>
            <Button onClick={handleSolve} disabled={loading}>
            {loading ? "Solving..." : "Solve TOV Equations"}
                    </Button>
                      </div>
                    </CardContent>
                  </Card>
            {data && (
                        <div className="mt-6">
                              <h2 className="text-lg font-semibold mb-4">Mass-Radius Curve</h2>
                              <Chart
                            type="scatter"
                data={data}
                options={{
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Radius (km)",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Mass (M☉)",
                            },
                        },
                    },
                }}
                          />
                            </div>
            )}
            </div>
    );
};

export default TOVSolverApp;
~
