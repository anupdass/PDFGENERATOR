
import './App.css'
import Counter from './components/Counter/Counter'
import DynamicCounter from './components/DynamicCounter/DynamicCounter'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

import image from '../src/assets/image.jpeg'
import JSONToPDFConverter from './JsonPdf/JsonPdf'
import PDFGenerator from './PDF/PDFGenerator'
import TableComponent from './PDF/TableComponent'
import LIBPDF from './PDF/LIB-Image'
import NewPdfFile from './PDF/NewPdfFile'


function App() {

  // make data in an array
  // const exportPDF = () => {
  //   const watermarkText = 'Watermark Text';


  //   const data = [
  //     { id: 1, name: 'John Doe', age: 30 },
  //     { id: 2, name: 'Jane Smith', age: 28 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //     { id: 3, name: 'Bob Johnson', age: 35 },
  //   ]

  //   const doc = new jsPDF();
  //   doc.text('Custom Table PDF', 10, 10);

  //   const columns = ['ID', 'Name', 'Age'];
  //   const rows = data.map(item => [item.id, item.name, item.age]);

  //   // doc.addImage(image, 'JPEG', 10, 10, 90, 60, '', 45);


  //   doc.autoTable({
  //     head: [columns],
  //     body: rows,
  //   });
  //   doc.text('anup das', 100, 100)


  //   function addWatermark() {
  //     const totalPages = doc.internal.getNumberOfPages();

  //     for (let i = 1; i <= totalPages; i++) {
  //       doc.setPage(i);
  //       doc.text(watermarkText, doc.internal.pageSize.width / 2, doc.internal.pageSize.height / 2, 'center', 'middle');
  //     }
  //   }

  //   // Add your content here (e.g., tables, images, text)

  //   // Add the watermark
  //   addWatermark();

  //   doc.save('custom-table.pdf');


  // }

  const tableData = [
    ['Name', 'Age'],
    ['John Doe', '30'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '23'],
    ['Jane Smith', '23'],
    ['Jane Smith', '23'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '23300'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    ['Jane Smith', '25'],
    // Add more data rows here
  ];

  const tableDatas = [
    {
      "id": 91,
      "bankCode": "AB-101",
      "bankName": "AB Bank",
      "entryDate": "2023-09-12T14:38:17.777",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": "2023-09-12T16:44:47.587",
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 88,
      "bankCode": "BA-101",
      "bankName": "Bank Asia",
      "entryDate": "2023-09-12T14:37:10.867",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 83,
      "bankCode": "BB-101",
      "bankName": "Brac Bank",
      "entryDate": "2023-09-10T11:00:57.91",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 92,
      "bankCode": "DB-101",
      "bankName": "Dhaka Bank",
      "entryDate": "2023-09-12T14:38:35.113",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 86,
      "bankCode": "DBBL-101",
      "bankName": "Dutch Bangla Bank Limited",
      "entryDate": "2023-09-10T12:04:51.727",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": "2023-09-12T13:41:45.3",
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 89,
      "bankCode": "EBL-101",
      "bankName": "Eastern Bank Limited",
      "entryDate": "2023-09-12T14:37:33.783",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 85,
      "bankCode": "EX-101",
      "bankName": "EXIM Bank",
      "entryDate": "2023-09-10T12:04:04.827",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 90,
      "bankCode": "IBBL-101",
      "bankName": "Islami Bank Bangladesh Limited",
      "entryDate": "2023-09-12T14:38:02.097",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 84,
      "bankCode": "JB-101",
      "bankName": "Jamuna Bank",
      "entryDate": "2023-09-10T11:31:50.01",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": null,
      "lastUpdateUserId": null,
      "activeStatus": 1
    },
    {
      "id": 87,
      "bankCode": "SBL-101",
      "bankName": "Southeast Bank Limited",
      "entryDate": "2023-09-10T13:47:14.883",
      "entryUserId": "admin@smartaccounting.com",
      "lastUpdateDate": "2023-09-12T13:40:55.48",
      "lastUpdateUserId": null,
      "activeStatus": 1
    }
  ]


  return (
    <Provider store={store}>
      {/* <Counter />
      <DynamicCounter />
      <button onClick={exportPDF}>Generate</button> */}
      {/* <JSONToPDFConverter />

      <PDFGenerator /> */}
      <LIBPDF btntext={'Generate PDF'} tableData={tableDatas} />
      <NewPdfFile />
      {/* <TableComponent /> */}
    </Provider>

  )
}

export default App
