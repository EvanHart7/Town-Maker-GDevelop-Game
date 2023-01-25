gdjs.LoseScreenCode = {};
gdjs.LoseScreenCode.GDNewTiledSpriteObjects1= [];
gdjs.LoseScreenCode.GDNewTiledSpriteObjects2= [];
gdjs.LoseScreenCode.GDNewSpriteObjects1= [];
gdjs.LoseScreenCode.GDNewSpriteObjects2= [];
gdjs.LoseScreenCode.GDNewTiledSprite2Objects1= [];
gdjs.LoseScreenCode.GDNewTiledSprite2Objects2= [];
gdjs.LoseScreenCode.GDHomeButtonObjects1= [];
gdjs.LoseScreenCode.GDHomeButtonObjects2= [];
gdjs.LoseScreenCode.GDInstructionButton3Objects1= [];
gdjs.LoseScreenCode.GDInstructionButton3Objects2= [];

gdjs.LoseScreenCode.conditionTrue_0 = {val:false};
gdjs.LoseScreenCode.condition0IsTrue_0 = {val:false};
gdjs.LoseScreenCode.condition1IsTrue_0 = {val:false};


gdjs.LoseScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.LoseScreenCode.GDHomeButtonObjects1);

gdjs.LoseScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoseScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoseScreenCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.LoseScreenCode.condition0IsTrue_0.val = true;
        gdjs.LoseScreenCode.GDHomeButtonObjects1[k] = gdjs.LoseScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.LoseScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.LoseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LoseScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.LoseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.LoseScreenCode.GDHomeButtonObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.LoseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.LoseScreenCode.GDHomeButtonObjects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.LoseScreenCode.GDHomeButtonObjects1);

gdjs.LoseScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoseScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.LoseScreenCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.LoseScreenCode.condition0IsTrue_0.val = true;
        gdjs.LoseScreenCode.GDHomeButtonObjects1[k] = gdjs.LoseScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.LoseScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.LoseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LoseScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.LoseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.LoseScreenCode.GDHomeButtonObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.LoseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.LoseScreenCode.GDHomeButtonObjects1[i].enableEffect("White", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.LoseScreenCode.GDHomeButtonObjects1);

gdjs.LoseScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoseScreenCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoseScreenCode.GDHomeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.LoseScreenCode.condition0IsTrue_0.val = true;
        gdjs.LoseScreenCode.GDHomeButtonObjects1[k] = gdjs.LoseScreenCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.LoseScreenCode.GDHomeButtonObjects1.length = k;}if (gdjs.LoseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.LoseScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseScreenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoseScreenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LoseScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.LoseScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.LoseScreenCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.LoseScreenCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.LoseScreenCode.GDHomeButtonObjects1.length = 0;
gdjs.LoseScreenCode.GDHomeButtonObjects2.length = 0;
gdjs.LoseScreenCode.GDInstructionButton3Objects1.length = 0;
gdjs.LoseScreenCode.GDInstructionButton3Objects2.length = 0;

gdjs.LoseScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['LoseScreenCode'] = gdjs.LoseScreenCode;
