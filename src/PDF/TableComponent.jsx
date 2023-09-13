import React, { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

function TableComponent() {
    const dataArray = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 28 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 312, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        { id: 3, name: 'Doe', age: 35 },
        // Add more data as needed
    ];
    const componentRef = useRef();

    const generatePdf = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <button onClick={generatePdf}>Generate PDF</button>
            <div ref={componentRef}>
                <h1>asfasdfasfasfs</h1>
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableComponent;
