/// <references path=".ref.ts" />

/**
 * @class HomePresenter
 * @brief
 */
class HomePresenter extends Presenter {
    //region Fields

    private _outcome : JQuery;
    private _input : JQuery;

    private _dictionaryEntryTemplate : HandlebarsTemplateDelegate;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    onCreate() : void {
        super.onCreate();

        this._outcome = jQuery('.js-outcome');
        this._input = jQuery('.js-input');

        this._dictionaryEntryTemplate = Handlebars.compile(JQueryStatic('#dictionary-entry-template'))

        this._input.on('keydown', (e) => {
            BusinessFactory
                .buildDictionaryEntry()
                .search(
                    jQuery(e).val(),
                    (entry) => {
                        this._dictionaryEntryTemplate(entry);
                    }
                )
        });
    }
    
    //endregion Public Methods
    
    //endregion Methods
}