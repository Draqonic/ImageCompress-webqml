Rectangle {
    id: errorRect
    fixed: true
    anchors.fill: parent
    color: 'darkred'
    visible: false

    Text {
        anchors.fill: parent
        font.bold: true
        font.pixelSize: 30
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        wrapMode: Text.WordWrap
        color: 'white'
        text: 'Connection error<br>Please, reload page'
    }
}