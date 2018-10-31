Rectangle {
    id: compressErrorRect
    anchors.fill: compressInput
    color: 'darkred'
    visible: false
    property string errorText: 'unknown'

    Text {
        anchors.fill: parent
        font.bold: true
        font.pixelSize: 19
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        wrapMode: Text.WordWrap
        color: 'white'
        text: 'Error: ' + parent.errorText
    }

    Timer {
        id: compressErrorTimer
        interval: 1500

        onTriggered: {
            compressErrorRect.visible = false
        }
    }
}
