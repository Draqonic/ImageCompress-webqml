Item {
    CompressInput {
    }

    Filtres {
    }

    Text {
        anchors.top: filters.bottom
        text: '<b>' + imagesModel.count + '</b> images'
              + (filters.isSearch ? ' | <b>' + proxyModel.count + '</b> matches' : '')
    }

    Gallery {
    }
}
