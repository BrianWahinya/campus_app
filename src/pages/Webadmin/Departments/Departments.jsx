import { useEffect, useState } from 'react'
import { CustomTable, Loader } from '../../../components'
import configs from '../../../helpers/configs'

const {host} = configs;
const fetch_url = `${host}/departmentGetAll.php`;
const Departments = () => {
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
          // console.log('DepartmentsAll', resp);
          setIsLoading(false);
          const filterDepartments = resp.filter((rs => rs.dp_id));
          setData(filterDepartments);

      }).catch((e) => {
        setIsLoading(false);
      })
    }, 2000)
  }, [])

  return <>
    <h5>Departments</h5>
    <div>
      <button className='btn btnAdd'>Add</button>
      <button className='btn btnDelete'>Delete</button>
    </div>
    {isLoading && <Loader />}
    {!isLoading && !data.length && "No Departments data"}
    {!isLoading && data.length && <CustomTable data={data} />}
  </>
}

export default Departments