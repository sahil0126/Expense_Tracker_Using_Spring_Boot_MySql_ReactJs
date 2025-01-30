import * as XLSX from "xlsx"
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export const exportToExcel = (tableData) => {
    const worksheet=XLSX.utils.json_to_sheet(tableData);
    const workbook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,worksheet,"Expenses")

    XLSX.writeFile(workbook,"expenses.xlsx")
};

export const exportToPdf = (tableData) => {
    const doc=new jsPDF();
    doc.text("Expenses Report",10,10);
    doc.autoTable({
        head:[["Id","Date","Amount", "Category", "Name", "Payment Method"]],
        body:tableData.map((row) => [
            row.id,
            row.date,
            row.exp_amount,
            row.exp_category,
            row.exp_name,
            row.payment_method,
        ])
    
    })

    doc.save("expenses.pdf")
}

