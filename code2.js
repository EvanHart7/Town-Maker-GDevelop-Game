gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDFloorPurpleObjects1= [];
gdjs.MainMenuCode.GDFloorPurpleObjects2= [];
gdjs.MainMenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MainMenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MainMenuCode.GDStartButtonObjects1= [];
gdjs.MainMenuCode.GDStartButtonObjects2= [];
gdjs.MainMenuCode.GDInstructionButtonObjects1= [];
gdjs.MainMenuCode.GDInstructionButtonObjects2= [];
gdjs.MainMenuCode.GDHomeButtonObjects1= [];
gdjs.MainMenuCode.GDHomeButtonObjects2= [];
gdjs.MainMenuCode.GDStartButton2Objects1= [];
gdjs.MainMenuCode.GDStartButton2Objects2= [];
gdjs.MainMenuCode.GDStartButton3Objects1= [];
gdjs.MainMenuCode.GDStartButton3Objects2= [];
gdjs.MainMenuCode.GDHomeButton1Objects1= [];
gdjs.MainMenuCode.GDHomeButton1Objects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InstructionButton"), gdjs.MainMenuCode.GDInstructionButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton2"), gdjs.MainMenuCode.GDStartButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton3"), gdjs.MainMenuCode.GDStartButton3Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDStartButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButtonObjects1[k] = gdjs.MainMenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDInstructionButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDInstructionButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDInstructionButtonObjects1[k] = gdjs.MainMenuCode.GDInstructionButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDInstructionButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton2Objects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDStartButton2Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton2Objects1[k] = gdjs.MainMenuCode.GDStartButton2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton3Objects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDStartButton3Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton3Objects1[k] = gdjs.MainMenuCode.GDStartButton3Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton3Objects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDInstructionButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDStartButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDStartButton2Objects1 */
/* Reuse gdjs.MainMenuCode.GDStartButton3Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].enableEffect("Black", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDInstructionButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInstructionButtonObjects1[i].enableEffect("Black", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton2Objects1[i].enableEffect("Black", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton3Objects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].enableEffect("White", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDInstructionButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInstructionButtonObjects1[i].enableEffect("White", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton2Objects1[i].enableEffect("White", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton3Objects1[i].enableEffect("White", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstructionButton"), gdjs.MainMenuCode.GDInstructionButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton2"), gdjs.MainMenuCode.GDStartButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton3"), gdjs.MainMenuCode.GDStartButton3Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButtonObjects1[k] = gdjs.MainMenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDInstructionButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDInstructionButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDInstructionButtonObjects1[k] = gdjs.MainMenuCode.GDInstructionButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDInstructionButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButton2Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton2Objects1[k] = gdjs.MainMenuCode.GDStartButton2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton3Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButton3Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton3Objects1[k] = gdjs.MainMenuCode.GDStartButton3Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton3Objects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDInstructionButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDStartButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDStartButton2Objects1 */
/* Reuse gdjs.MainMenuCode.GDStartButton3Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].enableEffect("Black", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDInstructionButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInstructionButtonObjects1[i].enableEffect("Black", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton2Objects1[i].enableEffect("Black", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton3Objects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].enableEffect("White", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDInstructionButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInstructionButtonObjects1[i].enableEffect("White", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton2Objects1[i].enableEffect("White", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDStartButton3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButton3Objects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButtonObjects1[k] = gdjs.MainMenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButtonObjects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InstructionButton"), gdjs.MainMenuCode.GDInstructionButtonObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDInstructionButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDInstructionButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDInstructionButtonObjects1[k] = gdjs.MainMenuCode.GDInstructionButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDInstructionButtonObjects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton2"), gdjs.MainMenuCode.GDStartButton2Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton2Objects1[k] = gdjs.MainMenuCode.GDStartButton2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton2Objects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton3"), gdjs.MainMenuCode.GDStartButton3Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDStartButton3Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDStartButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDStartButton3Objects1[k] = gdjs.MainMenuCode.GDStartButton3Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDStartButton3Objects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene3", false);
}}

}


{


{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDFloorPurpleObjects1.length = 0;
gdjs.MainMenuCode.GDFloorPurpleObjects2.length = 0;
gdjs.MainMenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;
gdjs.MainMenuCode.GDInstructionButtonObjects1.length = 0;
gdjs.MainMenuCode.GDInstructionButtonObjects2.length = 0;
gdjs.MainMenuCode.GDHomeButtonObjects1.length = 0;
gdjs.MainMenuCode.GDHomeButtonObjects2.length = 0;
gdjs.MainMenuCode.GDStartButton2Objects1.length = 0;
gdjs.MainMenuCode.GDStartButton2Objects2.length = 0;
gdjs.MainMenuCode.GDStartButton3Objects1.length = 0;
gdjs.MainMenuCode.GDStartButton3Objects2.length = 0;
gdjs.MainMenuCode.GDHomeButton1Objects1.length = 0;
gdjs.MainMenuCode.GDHomeButton1Objects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
