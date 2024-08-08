// In /home/frappe/frappe-bench/apps/healthcare/healthcare/healthcare/page/dicomviewer/dicomviewer.js

frappe.pages['dicomviewer'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'DICOM Viewer',
        single_column: true
    });
    $(page.body).html(`
        <div>
            <h1>DICOM Viewer</h1>
            <div id="dicom-container">
                Test
            </div>
        </div>
    `);
    // Initialize your DICOM viewer here
    console.log('DICOM Viewer initialized');
};
