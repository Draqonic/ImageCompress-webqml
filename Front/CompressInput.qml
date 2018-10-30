Grid {
    id: inputRow
    property bool active
    width: webApp.mobile ? 300
            : imageInput.width + imageButton.width + imageCompress.width + spacing * 2
    anchors.horizontalCenter: parent
    spacing: 10

    TextInputMaterial {
        id: imageInput
        width: 300 // TODO: mobile!
        enabled: !inputRow.active
        placeholder.text: qsTr('Insert a link to image compression');
    }

    TextInputMaterial {
        id: imageCompress
        enabled: !inputRow.active
        placeholder.text: qsTr('Quality (20)');
    }

    ButtonMaterial {
        id: imageButton
        //anchors.right: parent
        height: imageInput.height
        text: qsTr('Compress');
        enabled: !inputRow.active

        onClicked: {
            if(!imageInput.text || imageInput.text.substring(0, 4) !== 'http') {
                log('TODO: url error')
                return
            }

            inputRow.active = true
            urlRequest.send()
        }
    }

    NetworkRequest {
        id: urlRequest
        url: webApp.serverUrl + 'add?url=' + imageInput.text + (imageCompress.text ? '&jpegQuality=' + imageCompress.text : '')

        onLoaded(res): {
            log(this.url)
            imageInput.text = ''
            inputRow.active = false

            let result = JSON.parse(res)
            log(result)

            let obj = {name: result.image.original.name, original_size: result.image.original.size,
                                compress_size: result.image.compress.size, time: result.date }
            log(obj)
            imagesModel.append({name: result.image.original.name, original_size: result.image.original.size,
                                file: result.image.compress.name, compress_size: result.image.compress.size, time: result.date })
        }

        onError(err): {
            errorRect.visible = true
        }
    }
}