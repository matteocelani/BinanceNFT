import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';

export default function App(data) {

  function convertMiliseconds(endTime) {
    var date = new Date();
    var today = date.getTime();
    var miliseconds = endTime-today;
    var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));

    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);

    return days + "d :" + hours + "h :" + minutes + "m :" + seconds + "s";
  };

  function tableBuyNow(rows, finalRows, coins) {
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].tradeType === 0) {
        if (rows[i].currency === "BUSD") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "BNB") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].binancecoin.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        }
      }
    }
    return finalRows;
  }

  function tableAuction(rows, finalRows, coins) {
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].tradeType === 1) {
        if (rows[i].currency === "BUSD") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "BNB") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].binancecoin.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        }
      }
    }
    return finalRows;
  }

  function tableFull(rows, finalRows, coins) {
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].tradeType === 0) {
        if (rows[i].currency === "BUSD") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "BNB") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].binancecoin.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        }
      } else {
        if (rows[i].currency === "BUSD") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "BNB") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].binancecoin.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            endTime: convertMiliseconds(rows[i].setEndTime),
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId=" + rows[i].id + "&isOpen=true&isProduct=1"
          }
        }
      }
    }

    return finalRows;
  }


  function createTable(rows, finalRows, coins, filter) {
    switch (filter) {
      case 0:
        return tableBuyNow(rows, finalRows, coins)
      case 1:
        return tableAuction(rows, finalRows, coins)
      default:
        return tableFull(rows, finalRows, coins)
    }
  }

  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "ID",
      width: 100,
      editable: false
    },
    {
      field: "title",
      headerName: "Name",
      width: 250,
      editable: false
    },
    {
      field: "amount",
      headerName: "Price",
      type: "number",
      width: 115,
      editable: false
    },
    {
      field: "currency",
      headerName: "Coin",
      width: 120,
      editable: false
    },
    {
      field: "usd",
      headerName: "Price USD",
      type: "number",
      width: 150,
      editable: false
    },
    {
      field: "tradeType",
      headerName: "Trade Type",
      type: "number",
      width: 150,
      editable: false
    },
    {
      field: "endTime",
      headerName: "End Time",
      width: 200,
      editable: false
    },
    {
      field: "url",
      headerName: "URL",
      width: 300,
      renderCell: (params) => (
        <Link target="_blank" href={params.value}>{params.value}</Link>),
      editable: false
    }
  ];

  if (data.data.error) {
    return <div>Error: {data.data.error.message}</div>;
  } else if (!data.data.isLoaded && !data.data.coinsLoad) {
    return <div>Loading...</div>;
  } else {
    const rows = data.data.items.map((row) => {
      const { productId, ...rest } = row;
      return { id: productId, ...rest };
    });
    const coins = [data.data.coins.data]
    const finalRows = [];
    const filter = data.data.filterTrade
    createTable(rows, finalRows, coins, filter)

    return (
      <div style={{ height: 850, width: "100%" }}>
        <DataGrid
          rows={finalRows}
          columns={columns}
          rowsPerPageOptions={[100, 250, 500]}
          pageSize={100}
          density="compact"
        />
      </div>
    );
  }
}
