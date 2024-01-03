import { useEffect, useState } from "react"


function LastSalesPage() {

  const [sales, setSales] = useState()

  useEffect(() => {
    fetch('https://nextjs-course-3b7e2-default-rtdb.firebaseio.com/sales.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    });
  }, [])

  if(!sales) {
    return <p>Loading...</p>
  }

  

  return (
   <ul>
    {sales?.map((sale) => (
      <li key={sale.id}>{sale.username} - ${sale.volume}</li>
    ))}
   </ul>
  )
}

export default LastSalesPage