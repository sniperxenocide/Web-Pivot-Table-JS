

let webPivotTable = null;
selectedViewConfig = {
        rows: ["Region","State","City","Customer Name","Order ID","Product Name"],
        rowCaptions: ["Region","State","City","Customer Name","Order ID","Product Name"],
        columns: ["Category"],
        columnCaptions: ["Category"],
        measures: ["Quantity","Price","Cost","Profit","Sales"],
        measureCaptions: ["Quantity","Price","Cost","Profit","Sales"]
    };

function initPage(){
    checkDataSize();
    generatePivotTable();

}



function checkDataSize() {
    console.log('Array Length: '+reportData.length);
    let size = JSON.stringify(reportData).length;
    size = parseFloat((size/(1024*1024)).toFixed(2));
    console.log('Data Size: '+size+' mb');
}

function generatePivotTable() {
    webPivotTable = new WebPivotTable(reportData,selectedViewConfig,
        'table-container', null);
}

