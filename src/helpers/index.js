const helpers = {
    getNewId: function(){
        return new Date().getTime()
    },
    openInNewTab: function(url){
        return window.open(url, 'blank', 'noopener,noreferrer')
    }
}

export default helpers