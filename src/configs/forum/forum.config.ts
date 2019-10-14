
export class ForumConfig {
    private _url: string = "mongodb://user_email_forum:muratemilin93@ds115543.mlab.com:15543/ema-forum"

    get url(): string {
        return this._url;
    }

    set url(theUrl: string) {
        this._url = theUrl;
    }
}