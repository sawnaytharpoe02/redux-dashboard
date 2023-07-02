import { Table } from 'reactstrap';
import { getItem } from '../../utils/localstorage';
import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
export default function CustomTable({ setOpen, title, header, tableBody }) {
  return (
    <div>
      <h3>{title}</h3>
      <Table
        className={`app-table align-items-center table-flush ${
          getItem() === 'dark' && 'dark-theme'
        }`}
        responsive
        bordered>
        <thead>
          <tr>
            {header.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="list">{tableBody}</tbody>
      </Table>
    </div>
  );
}
