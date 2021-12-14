//Undo=Crtl+Z, Redo=Ctrl+Y
import './App.css'
import Punklist from './components/Punklist'
import CollectionCard from './components/CollectionCard'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main'


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x74E1d391eAC1E28D4bF236F0AB7C105aE85D1139&order_direction=asc'
          )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
      }

      return getMyNfts()
  }, [])
        

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}  
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}
export default App;
