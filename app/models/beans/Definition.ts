/// <references path=".ref.ts" />

/**
 * @class Definition
 * @brief
 */
class Definition {
    //region Fields

    private _key : string;
    private _translations : IList<Translation>;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    getKey() : string {
        return this._key;
    }

    setKey(value : string) : Definition {
        this._key = value;
        return this;
    }

    getTranslations() : IList<Translation> {
        return this._translations;
    }

    setTranslations(value : IList<Translation>) : Definition {
        this._translations = value;
        return this;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}