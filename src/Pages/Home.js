import { useState, useEffect } from 'react'
import Axios from 'axios'
import Refresh from '../Assets/refresh.png'
import Coin from '../Components/Coin'

function Home() {
  const [coins, setCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    refreshPage()
  }, [])

  const filterCoins = coins.filter((coin) => {
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  }) 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const refreshPage = () => {
    setIsLoading(true)
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      console.log(response.data)
      setIsLoading(false)
      setCoins(response.data)
    })

  }

  return (
    <div className='App'>
      <div className='headerContainer'>
        <h1>Crypto Tracker</h1>
        <div className='buttonContainer'>
          <input type="text" placeholder='Search Coins' onChange={handleSearch}/>
          <img src={Refresh} onClick={refreshPage} alt=""/>
        </div>
      </div>
      <div className='coinContainer'>
        {isLoading && <h1 className='loadingMssg'>Loading Data...</h1>}
        {filterCoins.map((coins) => {
          return (
            <Coin 
              id={coins.id}
              icon={coins.image}
              coinName={coins.name}
              coinSymbol={coins.coinSymbol}
              price={coins.price} 
              marketCap={coins.marketCap}
              priceChange={coins.priceChange}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home