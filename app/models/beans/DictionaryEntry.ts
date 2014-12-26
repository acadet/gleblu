/// <references path=".ref.ts" />

/**
 * @class DictionaryEntry
 * @brief
 */
class DictionaryEntry {
    //region Fields

    private _name: string;
    private _definitions : IList<Definition>;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    getName() : string {
        return this._name;
    }

    setName(value : string) : DictionaryEntry {
        this._name = value;
        return this;
    }

    getDefinitions() : IList<Definition> {
        return this._definitions;
    }

    setDefinitions(value : IList<Definition>) : DictionaryEntry {
        this._definitions = value;
        return this;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}