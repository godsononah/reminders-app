import { useEffect, useState } from "react";

function Crypto() {
    const [coinAbbrev, setCoinAbbrev] = useState('');
    const [coinUnit, setCoinUnit] = useState('');
    const [coinName, setCoinName] = useState('');
    const [coinValue, setCoinValue] = useState('');
    const [coinType, setCoinType] = useState('');

    const API_URL = 'https://api.coingecko.com/api/v3/exchange_rates';

    const updateCoinAbbrev = (e) => {
        e.preventDefault();
        setCoinName('');
        setCoinUnit('');
        setCoinValue('');
        setCoinType('');
        setCoinAbbrev(e.target.coinAbbrev.value);
        e.target.coinAbbrev.value = '';
    }

    useEffect(() => {
        if (coinAbbrev) {
            function manageData(rates) {
                setCoinUnit(rates[coinAbbrev].unit);
                setCoinName(rates[coinAbbrev].name);
                setCoinValue(rates[coinAbbrev].value);
                setCoinType(rates[coinAbbrev].type);
            }

            const loadCoinData = async () => {
                try {
                    const response = await fetch(API_URL);
                    const data = await response.json();
                    const rates = data.rates;
                    manageData(rates);
                } catch (error) {
                    console.error(error);
                }
            }

            loadCoinData();
        }
    }, [coinAbbrev]);

    return (
        <div style={{backgroundColor: "#eee", padding: "2em"}}>
            <div style={{width: "60%", margin: "auto", backgroundColor: "white", padding: "1em", borderRadius: "2em"}}>
                <h1 style={{textAlign: "center", color: "darkblue"}}>Crypto Checker</h1>
                <br />
                <form onSubmit={updateCoinAbbrev} style={{textAlign: "center", marginBottom: "2em"}}>
                    Coin Abbreviation: <input type="text" name="coinAbbrev" />
                    <button type="submit">Lookup Crypto Coin</button>
                    <br /><br />

                    Coin Name:  {coinName}<br />
                    Coin Unit:  <span style={{color: "red", fontWeight: "bold"}}>{coinAbbrev.toUpperCase()}</span><br />
                    Coin Value: <span style={{color: "green", fontWeight: "bold"}}>{coinValue}</span><br />
                    Coin Type:  {coinType}<br />
                </form>
            </div>
        </div>
    )
}

export default Crypto;