MainItem {
    id: webApp
    title: qsTr('Image Compressor');
    property string serverUrl

    constructor: {
        this.serverUrl = window.location.href.includes('file') ? 'http://localhost:3000/' : './'
    }

    IToolBar {
    }

    Item {
        anchors.top: toolBar.bottom
        anchors.bottom: parent.bottom
        anchors.topMargin: 15
        anchors.horizontalCenter: parent
        width: 97%

        CompressInput {
        }
		
		CompressError {
		}

        Filters {
        }

        Text {
            anchors.top: filters.bottom
            text: '<b>' + imagesModel.count + '</b> images'
                  + (filters.isSearch ? ' | <b>' + proxyModel.count + '</b> matches' : '')
        }

        Gallery {
        }
    }

    ErrorRect {
        anchors.fill: parent
        fixed: true
    }
}
