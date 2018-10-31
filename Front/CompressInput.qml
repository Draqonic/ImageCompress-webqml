Grid {
    id: compressInput
    property bool active
    width: webApp.mobile ? 300
                         : imageInput.width + imageButton.width + imageCompress.width + spacing * 2
    anchors.horizontalCenter: parent
    spacing: 10
    property string format: 'jpg'

    TextInputMaterial {
        id: imageInput
        width: 300
        enabled: !compressInput.active
        placeholder.text: qsTr('Insert a link to image compression');

        onTextChanged: {
            if (this.text.includes('png'))
                compressInput.format = 'png'
            else if (this.text.match(/.jpg|.jpeg/g))
                compressInput.format = 'jpg'
            else
                compressInput.format = ''
        }
    }

    TextInputMaterial {
        id: imageCompress
        enabled: !compressInput.active
        placeholder.text: compressInput.format === 'png' ? qsTr('Compress (9)')
                                                         : qsTr('Quality (20)');
    }

    ButtonMaterial {
        id: imageButton
        height: imageInput.height
        text: qsTr('Compress');
        enabled: !compressInput.active

        onClicked: {
            if(!imageInput.text || imageInput.text.substring(0, 4) !== 'http') {
                log('TODO: url error')
                return
            }

            compressInput.active = true
            urlRequest.send()
        }
    }

    NetworkRequest {
        id: urlRequest
        url: webApp.serverUrl + 'add?url=' + imageInput.text + (imageCompress.text ? '&jpegQuality=' + imageCompress.text : '')

        onLoaded(res): {
            imageInput.text = ''
            compressInput.active = false

            let result = JSON.parse(res)

            if (result.error) {
                let errorMessage
                switch(result.error) {
                case 'Download': errorMessage = 'Incorrect image url'; break
                case 'SQL': errorMessage = 'Server error'; break
                case 'Convert': errorMessage = 'Incorrect image format'; break
                default: errorMessage = 'Unknown'; break
                }

                compressErrorRect.errorText = errorMessage
                compressErrorRect.visible = true
                compressErrorTimer.start()
                return
            }

            let imageNew = {name: result.image.original.name, original_size: result.image.original.size, original_url: result.image.original.url,
                file: result.image.compress.name, compress_size: result.image.compress.size, time: result.date }

            imagesModel.insert(0, imageNew)
        }

        onError(err): {
            errorRect.visible = true
        }
    }
}
