/// <references path=".ref.ts" />

/**
 * @class Presenter
 * @brief
 */
class Presenter {
    //region Fields
    
    //endregion Fields
    
    //region Constructors

    constructor() {
        JQuery.on('load', () => {
           this.onCreate();
        });
    }
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    onCreate() : void {

    }
    
    //endregion Public Methods
    
    //endregion Methods
}