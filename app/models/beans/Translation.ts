/// <references path=".ref.ts" />

/**
 * @class Translation
 * @brief
 */
class Translation {
    //region Fields

    private _description : string;
    private _value : string;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    getDescription() : string {
        return this._description;
    }

    setDescription(value : string) : Translation {
        this._description = value;
        return this;
    }

    getValue() : string {
        return this._value;
    }

    setValue(value : string) : Translation {
        this._value = value;
        return this;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}