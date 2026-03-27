export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/BZ=F"
    );

    const data = await response.json();

    const precio = data.chart.result[0].meta.regularMarketPrice;

    res.status(200).json({
      brent: precio
    });

  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo Brent"
    });
  }
}
