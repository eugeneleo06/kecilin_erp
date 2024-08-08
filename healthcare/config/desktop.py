from frappe import _


def get_data():
	return [
		{
			"module_name": "Healthcare",
			"color": "grey",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("Healthcare"),
		},
		{
            "module_name": "Healthcare",
            "color": "blue",
            "icon": "octicon octicon-device-camera",
            "type": "page",
            "label": _("DICOM Viewer"),
            "link": "dicomviewer"
        }
	]
