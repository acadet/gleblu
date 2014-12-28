/// <references path=".ref.ts" />

/**
 * @class DictionaryEntrySerializer
 * @brief
 */
class DictionaryEntrySerializer implements IJSONSerializer<DictionaryEntry> {
    //region Fields

    private _definitionSerializer : IJSONSerializer<Definition>;
    
    //endregion Fields
    
    //region Constructors

    constructor(definitionSerializer : IJSONSerializer<Definition>) {
        this._definitionSerializer = definitionSerializer;
    }
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods


    fromJSON(obj : any) : DictionaryEntry {
        var outcome : DictionaryEntry;
        var definitionInput : Array<any>;
        var definitions : IList<Definition>;
        var size : number;

        outcome = new DictionaryEntry();
        outcome.setName(obj.name);

        definitionInput = obj.definitions;
        size = definitionInput.length;
        definitions = new ArrayList<Definition>();
        for (var i = 0; i < size; i++) {
            definitions.add(this._definitionSerializer.fromJSON(definitionInput[i]));
        }

        outcome.setDefinitions(definitions);

        return outcome;
    }

    toJSON(source : DictionaryEntry) : any {
        var outcome : any;
        var definitions : IList<Definition>;
        var size : number;

        outcome = {
            name: source.getName(),
            definitions: []
        };

        definitions = source.getDefinitions();
        size = definitions.getLength();
        for (var i = 0; i < size; i++) {
            outcome.definitions.push(this._definitionSerializer.toJSON(definitions.getAt(i)));
        }

        return outcome;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}