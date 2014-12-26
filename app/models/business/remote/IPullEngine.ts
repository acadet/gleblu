/// <references path=".ref.ts" />

/**
 * @class IPullEngine
 * @brief
 */
interface IPullEngine {
    run(input : string, success : Action<any>, error : Action<string>) : void;
}