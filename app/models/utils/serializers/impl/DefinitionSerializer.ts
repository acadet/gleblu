/// <references path=".ref.ts" />

/**
 * @class DefinitionSerializer
 * @brief
 */
class DefinitionSerializer implements IJSONSerializer<Definition> {
    //region Fields

    private _translationSerializer : IJSONSerializer<Translation>;
    
    //endregion Fields
    
    //region Constructors

    constructor(translationSerializer : IJSONSerializer<Translation>) {
        this._translationSerializer = translationSerializer;
    }
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    fromJSON(obj : any) : Definition {
        var outcome : Definition;
        var translationInput : Array<any>;
        var translations : IList<Translation>;
        var size : number;

        outcome = new Definition();
        outcome.setKey(obj.key);

        translationInput = obj.translations;
        translations = new ArrayList<Translation>();
        size = translationInput.length;
        for (var i = 0; i < size; i++) {
            translations.add(this._translationSerializer.fromJSON(translationInput[i]));
        }

        outcome.setTranslations(translations);

        return outcome;
    }

    toJSON(source : Definition) : any {
        var outcome : any;
        var translationInput : IList<Translation>;
        var size : number;

        outcome = {
            key: source.getKey(),
            translations : []
        };

        translationInput = source.getTranslations();
        size = translationInput.getLength();
        for (var i = 0; i < size; i++) {
            outcome.translations.push(this._translationSerializer.toJSON(translationInput.getAt(i)));
        }

        return outcome;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}