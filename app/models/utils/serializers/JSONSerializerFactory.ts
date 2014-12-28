/// <references path=".ref.ts" />

/**
 * @class JSONSerializerFactory
 * @brief
 */
class JSONSerializerFactory {
    //region Fields

    private static _definition : IJSONSerializer<Definition>;
    private static _dictionaryEntry : IJSONSerializer<DictionaryEntry>;
    private static _translation : IJSONSerializer<Translation>;
    
    //endregion Fields
    
    //region Constructors
    
    //endregion Constructors
    
    //region Methods
    
    //region Private Methods
    
    //endregion Private Methods
    
    //region Public Methods

    static buildDefinition() : IJSONSerializer<Definition> {
        if (JSONSerializerFactory._definition == null) {
            JSONSerializerFactory._definition =
                new DefinitionSerializer(JSONSerializerFactory.buildTranslation());
        }

        return JSONSerializerFactory._definition;
    }

    static buildDictionaryEntry() : IJSONSerializer<DictionaryEntry> {
        if (JSONSerializerFactory._dictionaryEntry == null) {
            JSONSerializerFactory._dictionaryEntry =
                new DictionaryEntrySerializer(JSONSerializerFactory.buildDefinition());
        }

        return JSONSerializerFactory._dictionaryEntry;
    }

    static buildTranslation() : IJSONSerializer<Translation> {
        if (JSONSerializerFactory._translation == null) {
            JSONSerializerFactory._translation = new TranslationSerializer();
        }

        return JSONSerializerFactory._translation;
    }
    
    //endregion Public Methods
    
    //endregion Methods
}