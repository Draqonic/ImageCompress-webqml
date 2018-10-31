Row {
    id: filters
    anchors.horizontalAlignment: parent
    anchors.top: compressInput.bottom
    anchors.topMargin: 30
    spacing: 3
    property bool isSearch: filterName.text || filterSize.text || filterDate.value || filterTime.value
    
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
        text: 'Filter by size (MB):'
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
    
    property string filterDateTime
    
    function resetDate() {
        let searchDate = filterDate.value
        let searchTime = filterTime.value ? filterTime.value : '00:00'
        filters.filterDateTime = searchDate + ' ' + searchTime
        log('Date', filters.filterDateTime)
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
    
    Button {
        text: 'Reset'
        
        onClicked: {
            filterName.text = ''
            filterSize.text = ''
            filterDate.element.dom.value = ''
            filterTime.element.dom.value = ''
            filterDate.value = ''
            filterTime.value = ''  
        }
    }
}
