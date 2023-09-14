import jsPDF from 'jspdf';

import image from '../assets/BSEC-Main.gif'

const generatePDF = (rows, columData) => {


    const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document

    // pdf.text('Bangladesh Steel and Engineering Corporation', 50, 10);
    // pdf.addImage(image, 'JPEG', 100, 15, 25, 25); // Adjust position and dimensions
    // pdf.setFontSize(14);
    // pdf.setTextColor(128, 128, 128);
    // pdf.text('Bangladesh Steel and Engineering Corporation', 55, 48);

    // Create a table with sample data

    // Generate table
    pdf.autoTable({
        // startY: 60, // Adjust the starting position
        head: columData,
        body: rows,
        theme: "grid",
        margin: { top: 55 },
    });

    // Split table across multiple pages if needed
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        pdf.setFontSize(20);
        pdf.setTextColor(0, 0, 0);
        pdf.text('Bangladesh Steel and Engineering Corporation', 40, 10);
        pdf.addImage(image, 'JPEG', 100, 15, 25, 25); // Adjust position and dimensions
        pdf.setFontSize(14);
        pdf.setTextColor(128, 128, 128);
        pdf.text('Bangladesh Steel and Engineering Corporation', 55, 48);

        pdf.setPage(i);
        pdf.setFontSize(8); // Adjust font size if needed
        pdf.text(10, 290, `Page ${i} of ${pageCount}`);
    }

    // Save the PDF or open in a new tab
    pdf.save('example.pdf'); // Change the filename as needed
};

export default generatePDF;