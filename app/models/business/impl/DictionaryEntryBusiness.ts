/// <references path=".ref.ts" />

/**
 * @class DictionaryEntryBusiness
 * @brief
 */
class DictionaryEntryBusiness implements IDictionaryEntryBusiness {
    //region Fields
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    search(input : String, callback : Action<any>) : void {
        PullEngineFactory
            .buildFrEn()
            .run(
                input,
                (outcome) => {
                    callback(outcome);
                },
                (error) => {
                    //TODO
                }
            );
    }
    
    //endregion Public Methods
    
    //endregion Methods
}