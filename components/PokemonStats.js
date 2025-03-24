export const PokemonStats = ({ stats }) => {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Stats</h2>
        <div className="space-y-2">
          {stats.map((stat) => (
            <div key={stat.stat.name} className="flex items-center">
              <span className="w-32 capitalize">{stat.stat.name.replace('-', ' ')}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
              <span className="w-10 text-right ml-2">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };