/// <references path=".ref.ts" />

/**
 * @class PullEngineFactory
 * @brief
 */
class PullEngineFactory {
    //region Fields

    private static _frEnEngine : IPullEngine;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    static buildFrEn() : IPullEngine {
        if (PullEngineFactory._frEnEngine == null) {
            PullEngineFactory._frEnEngine = new PullEngine(DictionaryKey.FRENCH, DictionaryKey.ENGLISH);
        }

        return PullEngineFactory._frEnEngine;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}