import React, { Component } from 'react';
import jsPDF from 'jspdf';
import image from '../assets/BSEC-Main.gif'

class JSONToPDFConverter extends Component {
    generatePDF = () => {

        const imgData = image

        // Create a new jsPDF instance
        const pdf = new jsPDF();

        // Add the JSON data to the PDF
        // pdf.text(10, 10, jsonString);
        const tableData = [
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
            ['Name', 'Age', 'Country'],
            ['John', 30, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 40, 'UK'],
        ];


        // Set table headers and data
        // pdf.autoTable({ });
        pdf.text('Bangladesh Steel and Engineering Corporation', 50, 10);
        pdf.text('Bangladesh Steel and Engineering Corporation', 60, 43);
        pdf.addImage(imgData, 'JPEG', 100, 15, 20, 20);
        pdf.setFontSize(14);
        pdf.setTextColor(128, 128, 128);
        pdf.autoTable({
            head: [['Name', 'Age', 'Country']],
            body: tableData,
            theme: "grid",
            // tableWidth: 200,
            margin: { top: 50 },
            startY: 20,
            tableWidth: 'auto',
            // headerStyles: { fillColor: 120, textColor: 255, },
        });

        // Save or display the PDF
        pdf.save('json_data.pdf');
    };

    render() {
        return (
            <div>
                <button onClick={this.generatePDF}>Generate PDF</button>
            </div>
        );
    }
}

export default JSONToPDFConverter;
