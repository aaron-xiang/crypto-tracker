import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios'

function CoinPage() {
  let { id } = useParams() 
  const [coin, setCoin] = useState(null)
  
  useEffect(() => {
    console.log(id)
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        console.log(response)
        setCoin(response.data)
      }
    )
  }, [])

  if (coin) {
    return (
      <div 
        className='coinPage-Container'
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}  
      >
        <div className='coinPage-Info'>
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt="Icon" className='coinPage-Icon'/>
          <div className='coinPage-Data'>
            <div className='coinPage-Row'>
              <h3 className="coinPage-RowHeader">Symbol:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className='coinPage-Row'>
              <h3 className="coinPage-RowHeader">Current Price:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className='coinPage-Row'>
              <h3 className="coinPage-RowHeader">Market Cap:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className='coinPage-Row'>
              <h3 className="coinPage-RowHeader">Symbol:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className='coinPage-Row'>
              <h3 className="coinPage-RowHeader">Symbol:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default CoinPage