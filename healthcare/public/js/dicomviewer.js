frappe.pages['dicomviewer'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'DICOM Viewer',
        single_column: true
    });

    // Load HTML content dynamically
    $.get('/assets/healthcare/js/dicomviewer.html', function(data) {
        $(page.body).html(data);
    });

    // Initialize your DICOM viewer here
    // Example: initialize your DICOM viewer using cornerstone.js or any other library
    console.log('DICOM Viewer initialized');
};