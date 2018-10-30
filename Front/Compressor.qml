Item { 
    CompressInput {
    }

    Row {
        id: filters
        anchors.horizontalAlignment: parent
        anchors.top: inputRow.bottom
        anchors.topMargin: 30
        spacing: 3
        property bool isSearch: filterName.text || filterSize.text || filterDate.text

        Text {
            text: 'Search:'
        }

        TextInputMaterial {
            id: filterName
            width: 250

            onTextChanged: {
                proxyModel._buildIndexMap()
            }
        }

        Text {
            text: 'Filter by size:'
        }

        TextInputMaterial {
            id: filterSize
            onTextChanged: {
                proxyModel._buildIndexMap()
            }
        }

        Text {
            text: 'Filter by load date:'
        }

        TextInputMaterial {
            id: filterDate
            enabled: false
        }
    }

    Text {
        anchors.top: filters.bottom
        text: '<b>' + imagesModel.count + '</b> images'
                + (filters.isSearch ? ' | <b>' + proxyModel.count + '</b> matches' : '')
    }

    NetworkRequest {
        id: imagesRequest
        url: webApp.serverUrl + 'all'

        onLoaded(res): {
            log(this.url)

            let result = JSON.parse(res)
            log(result)
            imagesModel.append(result)
        }

        onError(err): {
            errorRect.visible = true
        }
    }

    GridView {
        id: images
        anchors.top: filters.bottom
        anchors.topMargin: 20
        height: contentHeight
        width: 100%
        cellWidth: 200
        cellHeight: 200
        spacing: 5

        delegate: Image {
            id: image
            property string imageUrl: webApp.serverUrl + 'images/' + model.file // 'image?file=' + model.file
            width: 200; height: 200
            fillMode: Image.PreserveAspectCrop
            source: imageUrl

            HoverMixin {
                id: hover
            }
            
            MousePressMixin {
                onPressedChanged: {
                    if (value)
						window.open(image.imageUrl, '_blank')
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
                    anchors.fill: parent
                    anchors.margins: 10
                    text: "<b>" + model.name + "</b><br><br><b>"
                            + model.compress_size + "</b> MB<br>(original: <b>"
                            + model.original_size + "</b> MB)"
                    wrapMode: Text.WrapAnywhere
                    horizontalAlignment: Text.AlignHCenter
                }
            }
        }

	    model: ProxyModel {
            id: proxyModel
		    target: ListModel {
                id: imagesModel
                onCompleted: {
                    imagesRequest.send()
                    proxyModel.setFilter(item => item.name.includes(filterName.text) && item.compress_size >= filterSize.text)
                }
            }

            onCompleted: {
            }
	    }
    }
}