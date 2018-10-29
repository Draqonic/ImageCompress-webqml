Item { 
    anchors.top: toolBar.bottom
    anchors.bottom: parent.bottom
    anchors.topMargin: 15
    width: 100%

    Row {
        id: inputRow
        anchors.horizontalCenter: parent
        spacing: 10

        TextInputMaterial {
            id: imageInput
            width: 300 // TODO: mobile!
            placeholder.text: qsTr('Insert a link to image compression');
        }

        ButtonMaterial {
            id: imageButton
            anchors.right: parent
            height: imageInput.height
            text: qsTr('Compress');

            onClicked: {
                if(!imageInput.text || imageInput.text.substring(0, 4) !== 'http') {
                    log('TODO: url error')
                    return
               }

                imageInput.enabled = false
                imageButton.enabled = false
                urlRequest.send()
            }
        }
    }

    NetworkRequest {
        id: urlRequest
        url: 'http://localhost:3000?url=' + imageInput.text

        onLoaded(res): {
            imageInput.text = ''
            imageInput.enabled = true
            imageButton.enabled = true

            let result = JSON.parse(res)
            log(result)
        }
    }

    Text {
        text: 'Total image count: <b>' + imagesModel.count + '</b>'
    }

    Row {
        id: filterRow
        anchors.horizontalAlignment: parent
        anchors.top: inputRow.bottom
        anchors.topMargin: 30
        spacing: 3

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
        }
    }

    Text {
        anchors.top: filterRow.bottom
        text: '<b>' + proxyModel.count + '</b> matches'
        visible: filterName.text || filterSize.text || filterDate
    }

    GridView {
        id: images
        anchors.top: filterRow.bottom
        anchors.topMargin: 15
        height: contentHeight
        width: 100%
        cellWidth: 200
        cellHeight: 200
        spacing: 5

        delegate: Rectangle {
            width: 200; height: 200
            color: model.url

            HoverMixin {
                id: hover
            }
            
            MousePressMixin {
                onPressedChanged: {
                    if (value) console.log(value, model.url)
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
                    text: model.name + "</b><br><b>" + model.size + "</b> kb"
                    font.bold: true        
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
                    log('model')
                    imagesModel.append({'url': 'lightgreen', name: 'Some image title', size: 500})
                    for(let i = 0; i !== 50; ++i)
                        imagesModel.append({'url': 'lightgreen', name: 'NameNameNameNameNameName' + i, size: 140 + i})
                    log(imagesModel.count)
                    proxyModel.setFilter(item => item.name.includes(filterName.text) && item.size > filterSize.text)
                }
            }

            onCompleted: {
            }
	    }
    }
}