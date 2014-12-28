/// <references path=".ref.ts" />

/**
 * @class IDictionaryEntryBusiness
 * @brief
 */
interface IDictionaryEntryBusiness {
    search(input : String, callback : Action<any>) : void;
}