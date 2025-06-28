export function TickerBanner() {
  // Example data, replace with real data as needed
  const coins = [
    { name: "BBIT", change: "+12%", type: "gainer" },
    { name: "DOGE", change: "-5%", type: "loser" },
    { name: "ETH", change: "+3%", type: "gainer" },
    { name: "BTC", change: "-2%", type: "loser" },
  ];

  return (
    <div className="flex space-x-4 bg-[#232946] py-2 px-4 rounded items-center">
      {coins.map((coin) => (
        <span
          key={coin.name}
          className={
            coin.type === "gainer"
              ? "text-gainer font-bold"
              : "text-loser font-bold"
          }
        >
          {coin.name} {coin.change}
        </span>
      ))}
    </div>
  );
}
