
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

  const columData = [['ID', 'Name', 'Age']]

  return (
    <Provider store={store}>
      {/* <Counter />
      <DynamicCounter />
      <button onClick={exportPDF}>Generate</button> */}
      {/* <JSONToPDFConverter />

      <PDFGenerator /> */}
      <LIBPDF btntext={'Generate PDF'} tableData={tableData} columData={columData} />
      {/* <TableComponent /> */}
    </Provider>

  )
}

export default App
