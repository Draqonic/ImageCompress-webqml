GridView {
    id: images
    anchors.top: filters.bottom
    anchors.topMargin: 20
    height: contentHeight
    width: 100%
    cellWidth: !webApp.mobile ? 250 : webApp.width * 0.9 
    cellHeight: cellWidth
    spacing: 5

    NetworkRequest {
        id: imagesRequest
        url: webApp.serverUrl + 'all'

        onLoaded(res): {
            log(this.url)

            let result = JSON.parse(res)
            imagesModel.append(result)
        }

        onError(err): {
            errorRect.visible = true
        }
    }

    delegate: Image {
        id: image
        property string imageUrl: webApp.serverUrl + 'images/' + model.file // 'image?file=' + model.file
        width: parent.cellHeight; height: parent.cellHeight
        fillMode: Image.PreserveAspectCrop
        source: imageUrl

        HoverMixin {
            id: hover
        }

        Rectangle {
            anchors.fill: parent
            color: 'lightgray'
            opacity: image.status !== Image.Ready

            Behavior on opacity {
                Animation {
                    duration: 1000
                }
            }
        }

        Rectangle {
            anchors.fill: parent
            anchors.margins: 10
            color: 'white'
            visible: hover.value
            radius: 5
            opacity: 0.8

            Text {
                id: descText
                x: 5
                anchors.horizontalCenter: parent
                width: 98%
                text: '<b>' + model.name + '</b><br><br><b>'
                       + model.compress_size + '</b> MB<br>(original: <b>'
                       + model.original_size + '</b> MB)<br><br>' + model.time
                wrapMode: Text.WrapAnywhere
                horizontalAlignment: Text.AlignHCenter
            }

            Column {
                anchors.horizontalCenter: parent
                anchors.bottom: parent.bottom

                AbstractButton {
                    text: 'Compress'
                    width: 100%
                    height: 35
                    onClicked: { window.open(image.imageUrl, '_blank') }
                }

                AbstractButton {
                    text: 'Original'
                    width: 100%
                    height: 35
                    onClicked: { window.open(model.original_url, '_blank') }
                }
            }
        }
    }

    model: ProxyModel {
        id: proxyModel
        target: ListModel {
            id: imagesModel
            onCompleted: {
                imagesRequest.send()
                proxyModel.setFilter(function(item) {
                    return item.name.includes(filterName.text) && item.compress_size >= filterSize.text && item.time >= filters.filterDateTime
                })
            }
        }
    }
}
