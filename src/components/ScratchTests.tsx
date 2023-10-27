const fromMessage = "Hi from ScratchTest. "

const ScratchTests = () => {

    //#region ===========  Extends =================
    const getDeepValue = <
    TObj,
    TKeyLevel1 extends keyof TObj,
    TKeyLevel2 extends keyof TObj[TKeyLevel1]
    >(
        object: TObj,
        keyLevelOne: TKeyLevel1,
        keyLevelTwo: TKeyLevel2
    ): TObj[TKeyLevel1][TKeyLevel2] => {
    return object[keyLevelOne][keyLevelTwo];
}

const obj = {
    levelOne: {
        levelTwoBool : true,
        levelTwoNum : 2
    },
    keyTwo: {
        a: "cool",
        b: ()=>console.log("object")
    },
}
const deepResult1 = getDeepValue(obj, "levelOne", "levelTwoBool")
const deepResult2 = getDeepValue(obj, "keyTwo", "b")
console.log(fromMessage, deepResult1, deepResult2);


 //#endregion


  return (
    <div>ScratchTests</div>
  )
}

export default ScratchTests