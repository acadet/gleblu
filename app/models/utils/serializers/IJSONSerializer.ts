/// <references path=".ref.ts" />

/**
 * @class IJSONSerializer
 * @brief
 */
interface IJSONSerializer<T> {
    fromJSON(obj : any) : T;

    toJSON(source : T) : any;
}