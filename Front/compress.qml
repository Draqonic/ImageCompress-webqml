MainItem {
    id: webApp
    title: qsTr('Image Compressor');
    property string serverUrl: 'https://dny.pp.ua/compress/'

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
