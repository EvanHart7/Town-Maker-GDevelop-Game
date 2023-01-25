gdjs.WinScreenCode = {};
gdjs.WinScreenCode.GDNewSpriteObjects1= [];
gdjs.WinScreenCode.GDNewSpriteObjects2= [];
gdjs.WinScreenCode.GDNewTiledSpriteObjects1= [];
gdjs.WinScreenCode.GDNewTiledSpriteObjects2= [];
gdjs.WinScreenCode.GDHomeButtonObjects1= [];
gdjs.WinScreenCode.GDHomeButtonObjects2= [];
gdjs.WinScreenCode.GDNewTextObjects1= [];
gdjs.WinScreenCode.GDNewTextObjects2= [];

gdjs.WinScreenCode.conditionTrue_0 = {val:false};
gdjs.WinScreenCode.condition0IsTrue_0 = {val:false};
gdjs.WinScreenCode.condition1IsTrue_0 = {val:false};


gdjs.WinScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WinScreenCode.GDHomeButtonObjects1);

gdjs.WinScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.WinScreenCode.condition0IsTrue_0.val = true;
        gdjs.WinScreenCode.GDHomeButtonObjects1[k] = gdjs.WinScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.WinScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.WinScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDHomeButtonObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.WinScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDHomeButtonObjects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WinScreenCode.GDHomeButtonObjects1);

gdjs.WinScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.WinScreenCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.WinScreenCode.condition0IsTrue_0.val = true;
        gdjs.WinScreenCode.GDHomeButtonObjects1[k] = gdjs.WinScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.WinScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.WinScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDHomeButtonObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.WinScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.WinScreenCode.GDHomeButtonObjects1[i].enableEffect("White", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WinScreenCode.GDHomeButtonObjects1);

gdjs.WinScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDHomeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.WinScreenCode.condition0IsTrue_0.val = true;
        gdjs.WinScreenCode.GDHomeButtonObjects1[k] = gdjs.WinScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.WinScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


{
}

}


};

gdjs.WinScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.WinScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.WinScreenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.WinScreenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.WinScreenCode.GDHomeButtonObjects1.length = 0;
gdjs.WinScreenCode.GDHomeButtonObjects2.length = 0;
gdjs.WinScreenCode.GDNewTextObjects1.length = 0;
gdjs.WinScreenCode.GDNewTextObjects2.length = 0;

gdjs.WinScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['WinScreenCode'] = gdjs.WinScreenCode;
