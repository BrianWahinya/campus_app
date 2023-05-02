import React from 'react'
import { Table } from 'reactstrap'
import "./css/table.css";

const schools = [
  {
    id: 1,
    nameEN: 'School of Computing',
    nameSW: 'Shule ya Uhandisi wa Kuhesabu',
    descriptionEN: 'This school offers courses in computer science, software engineering, and information technology.',
    descriptionSW: 'Shule hii inatoa kozi katika sayansi ya kompyuta, uhandisi wa programu, na teknolojia ya habari.',
  },
  {
    id: 2,
    nameEN: 'School of Medicine',
    nameSW: 'Shule ya Tiba',
    descriptionEN: 'This school offers courses in medicine, nursing, and public health.',
    descriptionSW: 'Shule hii inatoa kozi katika tiba, uuguzi, na afya ya umma.',
  },
  {
    id: 3,
    nameEN: 'School of Engineering',
    nameSW: 'Shule ya Uhandisi',
    descriptionEN: 'This school offers courses in mechanical engineering, electrical engineering, and civil engineering.',
    descriptionSW: 'Shule hii inatoa kozi katika uhandisi wa mitambo, uhandisi wa umeme, na uhandisi wa kiraia.',
  },
  {
    id: 4,
    nameEN: 'School of Business',
    nameSW: 'Shule ya Biashara',
    descriptionEN: 'This school offers courses in accounting, finance, and management.',
    descriptionSW: 'Shule hii inatoa kozi katika uhasibu, fedha, na usimamizi.',
  },
];

const CustomTable = ({data}) => {

  // const headers = data.reduce((acc, curr) => {
  //     const heads = Object.keys(curr);
  //     acc.push(...heads);
  //     return acc;
  // }, [])

  const headers = Object.keys(data[0]);

  return (
    <Table bordered responsive striped hover className='custom_table'>
      <thead>
        <tr>
          {headers.map((hd, idx) => <th key={idx}>{hd}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((dt, idx) => (
          <tr key={idx}>
            {headers.map((hd, num) => num===0 && headers.length > 1? <th scope='row' key={num}>{dt[hd]}</th>: <td key={num}>{dt[hd]}</td>)}
            {/* <th scope="row">{dt[header]}</th> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable