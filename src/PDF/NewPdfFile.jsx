import React from 'react';
import jsPDF from 'jspdf';

const NewPdfFile = () => {
    const generatePDF = () => {
        // Create a new PDF document
        const pdf = new jsPDF();

        // Add text
        pdf.setFontSize(12);
        pdf.text('This is underlined text', 10, 20);

        // Calculate the width of the text
        const textWidth = pdf.getTextWidth('This is underlined text');

        // Set line width for the underline
        pdf.setLineWidth(0.5); // You can adjust the line thickness as needed

        // Draw a line under the text
        pdf.line(10, 25, 10 + textWidth, 25);

        // Save or display the PDF as needed
        pdf.save('myPdf.pdf');
    };

    return (
        <div>
            <button onClick={generatePDF}>Generate PDF with underline</button>
        </div>
    );
};

export default NewPdfFile