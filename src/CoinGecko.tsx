import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

const CoinGeckoAPI = () => {
  const [data, setData] = useState<Coin[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <StyledTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.id}</td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

export default CoinGeckoAPI;
