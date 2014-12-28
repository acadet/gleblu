/// <references path=".ref.ts" />

/**
 * @class TranslationSerializer
 * @brief
 */
class TranslationSerializer implements IJSONSerializer<Translation> {
    //region Fields
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    fromJSON(obj : any) : Translation {
        var outcome : Translation;

        outcome = new Translation();
        outcome
            .setDescription(obj.description)
            .setValue(obj.value);

        return outcome;
    }

    toJSON(source : Translation) : any {
        var outcome : any;

        outcome = {
            description: source.getDescription(),
            value: source.getValue()
        };

        return outcome;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}