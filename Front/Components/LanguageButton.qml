AbstractButton {
    property string lang
    text: lang === 'en' ? 'Русский' : 'English'

    onClicked: {
        // this.lang = this.lang === 'en' ? 'ru' : 'en'
        log('set lang', context.language)
        context.language = 'uk'
    }

    onLangChanged: {
        log('lang', value)
        context.language = value
        localStorage.set('lang', value, function(err) {
            log('lang error', err)
        })
    }

    // onCompleted: {
    //     let lang
    //     //localStorage.getOrDefault('lang', function(arg) { lang = arg }, context.language)
    //     if (lang === 'ru-ru' || !lang) lang = 'ru'
    //     //this.lang = lang
    //     this.lang = 'ru-ru'
    //     log('Current lang:', lang)
    // }
}