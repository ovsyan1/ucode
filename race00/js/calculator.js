class Calculator extends CalcEngineering {



    constructor(data) {
        super();
        this.templates = data.templates;
        this.types = data.types;
        this.themes = data.themes;
        this.type = data.type;
        this.theme = data.theme;
        this.switcher = data.switcher;
        this.skin = data.skin;


        this._init = this.init(this.skin);

    }

    log() {
        // console.log('types: ' + this.types);
        // console.log('themes: ' + this.themes);
        // console.log('type: ' + this.types[this.type]);
        // console.log('theme: ' + this.themes[this.theme]);
    }
}

//export { Calculator }