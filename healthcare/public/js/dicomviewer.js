// In healthcare/public/js/dicomviewer.js

frappe.pages['dicomviewer'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'DICOM Viewer',
        single_column: true
    });

    $(frappe.render_template('dicomviewer', {})).appendTo(page.body);

    // Initialize your DICOM viewer here
    // Example: initialize your DICOM viewer using cornerstone.js or any other library
};
