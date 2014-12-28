/// <references path=".ref.ts" />

/**
 * @class PullEngine
 * @brief
 */
class PullEngine implements IPullEngine {
    //region Fields

    private static _SERVER_ADDRESS : string = "http://www.wordreference.com/";
    private _from : DictionaryKey;
    private _to : DictionaryKey;

    //endregion Fields

    //region Constructors

    constructor(from : DictionaryKey, to : DictionaryKey) {
        this._from = from;
        this._to = to;
    }

    //endregion Constructors

    //region Methods

    //region Private Methods

    //endregion Private Methods

    //region Public Methods

    run(input : string, success : Action<any>, error : Action<string>) : void {
        var url : string;

        url = PullEngine._SERVER_ADDRESS + this._from + this._to + '/' + input;
        jQuery.ajax(
            url,
            {
                type: "GET",
                dataType: "html",
                success: (data: any, textStatus: string, jqXHR: JQueryXHR) : any => {
                    var outcome : any;
                    var cursor : JQuery;
                    var currentEntry : any;

                    outcome = {};
                    outcome.input = jQuery(data).find('h3.headerWord').text();
                    outcome.definitions = [];

                    cursor = jQuery(data).find('#articleWRD > table.WRD');
                    cursor.find('tr.even, tr.odd').each((index, element) => {
                        var elementCursor : JQuery;
                        var id : String;

                        elementCursor = jQuery(element);
                        id = elementCursor.attr('id');
                        if (id != null && id.trim().match(this._from + this._to + ':.*')) {
                            currentEntry = {};
                            currentEntry.key = elementCursor.find('td.FrWrd').text();
                            currentEntry.values = [];
                            outcome.definitions.push(currentEntry);
                        }

                        currentEntry.translations.push({
                            description: elementCursor.find('td:not(FrWrd, ToWrd)').text(),
                            value: elementCursor.find('td.ToWrd').text()
                        });
                    });

                    success(outcome);
                },
                error: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) : any => {
                    error(textStatus);
                }
            }
        )
    }

    //endregion Public Methods

    //endregion Methods
}