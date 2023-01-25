gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDNewPanelSpriteObjects1= [];
gdjs.InstructionsCode.GDNewPanelSpriteObjects2= [];
gdjs.InstructionsCode.GDHomeButtonObjects1= [];
gdjs.InstructionsCode.GDHomeButtonObjects2= [];
gdjs.InstructionsCode.GDNewSpriteObjects1= [];
gdjs.InstructionsCode.GDNewSpriteObjects2= [];
gdjs.InstructionsCode.GDNewTextObjects1= [];
gdjs.InstructionsCode.GDNewTextObjects2= [];
gdjs.InstructionsCode.GDNewText2Objects1= [];
gdjs.InstructionsCode.GDNewText2Objects2= [];
gdjs.InstructionsCode.GDNewSprite2Objects1= [];
gdjs.InstructionsCode.GDNewSprite2Objects2= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};


gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.InstructionsCode.GDHomeButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDHomeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDHomeButtonObjects1[k] = gdjs.InstructionsCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDHomeButtonObjects1.length = k;}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.InstructionsCode.GDHomeButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.InstructionsCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDHomeButtonObjects1[k] = gdjs.InstructionsCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDHomeButtonObjects1.length = k;}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDHomeButtonObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDHomeButtonObjects1[i].enableEffect("White", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.InstructionsCode.GDHomeButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDHomeButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDHomeButtonObjects1[k] = gdjs.InstructionsCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDHomeButtonObjects1.length = k;}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDHomeButtonObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDHomeButtonObjects1[i].enableEffect("White", true);
}
}}

}


{


{
}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDHomeButtonObjects1.length = 0;
gdjs.InstructionsCode.GDHomeButtonObjects2.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDNewTextObjects1.length = 0;
gdjs.InstructionsCode.GDNewTextObjects2.length = 0;
gdjs.InstructionsCode.GDNewText2Objects1.length = 0;
gdjs.InstructionsCode.GDNewText2Objects2.length = 0;
gdjs.InstructionsCode.GDNewSprite2Objects1.length = 0;
gdjs.InstructionsCode.GDNewSprite2Objects2.length = 0;

gdjs.InstructionsCode.eventsList0(runtimeScene);

return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
