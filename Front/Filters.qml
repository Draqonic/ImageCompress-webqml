Grid {
    id: filters
    anchors.horizontalAlignment: parent
    anchors.top: compressInput.bottom
    anchors.topMargin: 30
    width: 100%
    spacing: 5
    property bool isSearch: filterName.text || filterSize.text || filterDate.value || filterTime.value
    property string filterDateTime

    function resetDate() {
        if (!filterDate.value) filters.filterDateTime = ''
        let searchDate = filterDate.value
        let searchTime = filterTime.value ? filterTime.value : '00:00'
        filters.filterDateTime = searchDate + ' ' + searchTime
    }

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
        text: 'Size (MB):'
    }

    TextInputMaterial {
        id: filterSize
        onTextChanged: {
            proxyModel._buildIndexMap()
        }
    }

    AbstractButton {
        height: filterTime.height
        text: !proxyModel.descSize ? 'Larger' : 'Less'

        onClicked: {
            proxyModel.descSize = !proxyModel.descSize
            proxyModel._buildIndexMap()
        }
    }

    Text {
        text: 'Load time:'
    }

    DateInput {
        id: filterDate
        
        onValueChanged: {
            filters.resetDate()
            proxyModel._buildIndexMap()
        }
    }

    TimeInput {
        id: filterTime
        enabled: filterDate.value
        
        onValueChanged: {
            filters.resetDate()
            proxyModel._buildIndexMap()
        }
    }

    AbstractButton {
        height: filterTime.height
        text: !proxyModel.descTime ? 'Later' : 'Earlier'

        onClicked: {
            proxyModel.descTime = !proxyModel.descTime
            proxyModel._buildIndexMap()
        }
    }
}
