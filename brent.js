export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Cache-Control", "no-store");

  try {
   const response = await fetch(
  "https://query1.finance.yahoo.com/v8/finance/chart/BZ=F?interval=1m&range=1d"
);

    const data = await response.json();

    const precios = data.chart.result[0].indicators.quote[0].close;
const precio = precios[precios.length - 1];

    return res.status(200).json({
      brent: precio
    });

  } catch (error) {
    return res.status(500).json({
      error: "Error obteniendo Brent"
    });
  }
}
