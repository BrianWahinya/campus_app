import { useEffect, useState } from 'react'
import { CustomTable, Loader } from '../../../components'
import configs from '../../../helpers/configs'

const {host} = configs;
const fetch_url = `${host}/newsGetAll.php`;
const News = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(fetch_url, {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json; charset=utf-8" }
      })
      .then(response => response.json())
      .then(resp => {
          // console.log('NewsAll', resp);
          setIsLoading(false);
          setData(resp);
      }).catch((e) => {
        setIsLoading(false);
      })
    }, 2000)
  }, [])

  return <>
    <h5>News</h5>
    <div>
      <button className='btn btnAdd'>Add</button>
      <button className='btn btnDelete'>Delete</button>
    </div>
    {isLoading && <Loader />}
    {!isLoading && !data.length && "No School data"}
    {!isLoading && data.length && <CustomTable data={data} />}
  </>
}

export default News