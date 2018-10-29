Rectangle {
    id: toolBar
    z: 1;
    fixed: true;
    width: 100%;
    opacity: 1;
    height: 50;
    effects.shadow.x: 1	;
    effects.shadow.y: 1;
    effects.shadow.color: "#d3d3d3";
    effects.shadow.blur: 6;
    effects.shadow.spread: 2;

    Text {
        anchors.centerIn: parent
        text: qsTr('Image Compressor'); // Минимизация изображения
        font.bold: true
        //font.capitalization: Font.SmallCaps
        font.pixelSize: parent.height - 25
    }

    LanguageButton {
        //text: qsTr('Русский');
    }
}