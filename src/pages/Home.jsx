import { useEffect, useState } from "react";
import { useTheme, useThemeToggle } from "../App";
import Data from '../data/data.json'
import Card from "../component/Card";
import Cart from "../component/Cart";

function Home() {
    const isDarkMode = useTheme()
    const [data, setData] = useState(null)
    const [state, setSatate] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('')
    const toggleTheme = useThemeToggle()
    const url = new URL('https://63d304794abff88834170d21.mockapi.io/ss')
    url.searchParams.append('title', search)

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response id error reques')
                }
                return response.json()
            })
            .then(dataa => {
                setData(dataa)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
        if (state < 8) {
            return setSatate
        }
    }, [search])

    if (loading) {
        return 'loading ....'
    }


    return (

        <div className={`App ${isDarkMode ? "dark" : "ligth"}`}>
            <input className="appInput" onChange={(e) => setSearch(e.target.value)} type="text" />
            <button className="newButton" onClick={toggleTheme}>mode</button>

            <div className='container'>
                {
                    data?.map((item) =>

                        <Card
                            key={item.id}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            description={item.description}
                            title={item.title}
                            img={item.image}
                        />

                    )

                }
            </div>
     
        </div>


    );
}

export default Home;