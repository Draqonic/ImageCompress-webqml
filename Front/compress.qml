MainItem {
    id: webApp
    title: qsTr('Image Compressor');

    IToolBar {
    }

    Compressor {
        anchors.horizontalCenter: parent
        width: 97%
    }

    LocalStorage {
        id: localStorage
    }
}
