export default class Post {
    constructor(title) {
        this.title = title;
        this.date = new Date();
    }

    string () {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        });
    }
}