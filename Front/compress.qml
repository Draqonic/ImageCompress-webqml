MainItem {
    id: webApp
    title: qsTr('Image Compressor');
    property string serverUrl: 'http://localhost:3000/'

    IToolBar {
    }

    Compressor {
        anchors.top: toolBar.bottom
        anchors.bottom: parent.bottom
        anchors.topMargin: 15
        anchors.horizontalCenter: parent
        width: 97%
    }

    LocalStorage {
        id: localStorage
    }

    ErrorRect {}
}
