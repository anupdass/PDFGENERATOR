import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer';
import phoneLogo from '../assets/image.jpeg'


const MyDocument = ({ data, anup }) => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={styles.title}>JSON Data as PDF {anup}</Text>
                <Image style={styles.image} src={phoneLogo} />

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Product</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Type</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Period</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Price</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Price</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Price</Text>
                        </View>
                    </View>


                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>React-PDF</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>3 User </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>React-PDF</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>3 User </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>5€</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document >
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        margin: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "16.67%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    },
    image: {
        width: '50px',
        height: '50px',
        marginBottom: '20px',
        borderRadius: "100%",
        objectFit: "center",
        // position: 'absolute',
        left: '100px',
        top: '0px'
    }

    // Add more styles as needed
});

const data = [
    {
        id: 1,
        title: 'bank',
        code: 'abc'
    },
    {
        id: 2,
        title: 'bank',
        code: 'abc'
    },
    {
        id: 3,
        title: 'bank',
        code: 'abc'
    },
    {
        id: 4,
        title: 'bank',
        code: 'abc'
    },
]

function PDFGenerator({ data }) {
    return (
        // <PDFViewer width={1000} height={400}>
        //     <MyDocument data={data} />
        // </PDFViewer>
        <PDFDownloadLink document={<MyDocument anup={'anup'} />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    );
}

export default PDFGenerator;
