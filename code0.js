gdjs.Level_321Code = {};
gdjs.Level_321Code.forEachCount0_2 = 0;

gdjs.Level_321Code.forEachCount1_2 = 0;

gdjs.Level_321Code.forEachCount2_2 = 0;

gdjs.Level_321Code.forEachCount3_2 = 0;

gdjs.Level_321Code.forEachIndex2 = 0;

gdjs.Level_321Code.forEachObjects2 = [];

gdjs.Level_321Code.forEachTemporary2 = null;

gdjs.Level_321Code.forEachTotalCount2 = 0;

gdjs.Level_321Code.GDMonsterObjects1= [];
gdjs.Level_321Code.GDMonsterObjects2= [];
gdjs.Level_321Code.GDMonsterObjects3= [];
gdjs.Level_321Code.GDMonsterObjects4= [];
gdjs.Level_321Code.GDShape1Objects1= [];
gdjs.Level_321Code.GDShape1Objects2= [];
gdjs.Level_321Code.GDShape1Objects3= [];
gdjs.Level_321Code.GDShape1Objects4= [];
gdjs.Level_321Code.GDShape2Objects1= [];
gdjs.Level_321Code.GDShape2Objects2= [];
gdjs.Level_321Code.GDShape2Objects3= [];
gdjs.Level_321Code.GDShape2Objects4= [];
gdjs.Level_321Code.GDShape3Objects1= [];
gdjs.Level_321Code.GDShape3Objects2= [];
gdjs.Level_321Code.GDShape3Objects3= [];
gdjs.Level_321Code.GDShape3Objects4= [];
gdjs.Level_321Code.GDShape4Objects1= [];
gdjs.Level_321Code.GDShape4Objects2= [];
gdjs.Level_321Code.GDShape4Objects3= [];
gdjs.Level_321Code.GDShape4Objects4= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDScoreObjects3= [];
gdjs.Level_321Code.GDScoreObjects4= [];
gdjs.Level_321Code.GDObstacleObjects1= [];
gdjs.Level_321Code.GDObstacleObjects2= [];
gdjs.Level_321Code.GDObstacleObjects3= [];
gdjs.Level_321Code.GDObstacleObjects4= [];
gdjs.Level_321Code.GDLifeObjects1= [];
gdjs.Level_321Code.GDLifeObjects2= [];
gdjs.Level_321Code.GDLifeObjects3= [];
gdjs.Level_321Code.GDLifeObjects4= [];
gdjs.Level_321Code.GDGameOverObjects1= [];
gdjs.Level_321Code.GDGameOverObjects2= [];
gdjs.Level_321Code.GDGameOverObjects3= [];
gdjs.Level_321Code.GDGameOverObjects4= [];
gdjs.Level_321Code.GDButtonTryAgainObjects1= [];
gdjs.Level_321Code.GDButtonTryAgainObjects2= [];
gdjs.Level_321Code.GDButtonTryAgainObjects3= [];
gdjs.Level_321Code.GDButtonTryAgainObjects4= [];
gdjs.Level_321Code.GDHomeObjects1= [];
gdjs.Level_321Code.GDHomeObjects2= [];
gdjs.Level_321Code.GDHomeObjects3= [];
gdjs.Level_321Code.GDHomeObjects4= [];
gdjs.Level_321Code.GDShape4ExplosionObjects1= [];
gdjs.Level_321Code.GDShape4ExplosionObjects2= [];
gdjs.Level_321Code.GDShape4ExplosionObjects3= [];
gdjs.Level_321Code.GDShape4ExplosionObjects4= [];
gdjs.Level_321Code.GDShape3ExplosionObjects1= [];
gdjs.Level_321Code.GDShape3ExplosionObjects2= [];
gdjs.Level_321Code.GDShape3ExplosionObjects3= [];
gdjs.Level_321Code.GDShape3ExplosionObjects4= [];
gdjs.Level_321Code.GDShape2ExplosionObjects1= [];
gdjs.Level_321Code.GDShape2ExplosionObjects2= [];
gdjs.Level_321Code.GDShape2ExplosionObjects3= [];
gdjs.Level_321Code.GDShape2ExplosionObjects4= [];
gdjs.Level_321Code.GDShape1ExplosionObjects1= [];
gdjs.Level_321Code.GDShape1ExplosionObjects2= [];
gdjs.Level_321Code.GDShape1ExplosionObjects3= [];
gdjs.Level_321Code.GDShape1ExplosionObjects4= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects2[k] = gdjs.Level_321Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects2[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects2[k] = gdjs.Level_321Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(450, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects2[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) + 5 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects2[k] = gdjs.Level_321Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].addForce(0, -(450), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 5 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(0, 450, 0);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.Level_321Code.GDShape1Objects1, "Shape2": gdjs.Level_321Code.GDShape2Objects1, "Shape3": gdjs.Level_321Code.GDShape3Objects1, "Shape4": gdjs.Level_321Code.GDShape4Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level_321Code.GDShape1Objects2, "Shape2": gdjs.Level_321Code.GDShape2Objects2, "Shape3": gdjs.Level_321Code.GDShape3Objects2, "Shape4": gdjs.Level_321Code.GDShape4Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level_321Code.GDShape1Objects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1ExplosionObjects3Objects = Hashtable.newFrom({"Shape1Explosion": gdjs.Level_321Code.GDShape1ExplosionObjects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape2Objects3Objects = Hashtable.newFrom({"Shape2": gdjs.Level_321Code.GDShape2Objects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape2ExplosionObjects3Objects = Hashtable.newFrom({"Shape2Explosion": gdjs.Level_321Code.GDShape2ExplosionObjects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape3Objects3Objects = Hashtable.newFrom({"Shape3": gdjs.Level_321Code.GDShape3Objects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape3ExplosionObjects3Objects = Hashtable.newFrom({"Shape3Explosion": gdjs.Level_321Code.GDShape3ExplosionObjects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape4Objects3Objects = Hashtable.newFrom({"Shape4": gdjs.Level_321Code.GDShape4Objects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape4ExplosionObjects3Objects = Hashtable.newFrom({"Shape4Explosion": gdjs.Level_321Code.GDShape4ExplosionObjects3});gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level_321Code.GDShape1Objects2, gdjs.Level_321Code.GDShape1Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects3Objects) != 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDShape1Objects3 */
gdjs.Level_321Code.GDShape1ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1ExplosionObjects3Objects, (( gdjs.Level_321Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape1Objects3[0].getPointX("Center")), (( gdjs.Level_321Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape1Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1ExplosionObjects3[i].setParticleSize1(0.5 * (( gdjs.Level_321Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape1Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDShape2Objects2, gdjs.Level_321Code.GDShape2Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape2Objects3Objects) != 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDShape2Objects3 */
gdjs.Level_321Code.GDShape2ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape2ExplosionObjects3Objects, (( gdjs.Level_321Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape2Objects3[0].getPointX("Center")), (( gdjs.Level_321Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape2Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape2ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2ExplosionObjects3[i].setParticleSize1(0.5 * (( gdjs.Level_321Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape2Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDShape3Objects2, gdjs.Level_321Code.GDShape3Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape3Objects3Objects) != 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDShape3Objects3 */
gdjs.Level_321Code.GDShape3ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape3ExplosionObjects3Objects, (( gdjs.Level_321Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape3Objects3[0].getPointX("Center")), (( gdjs.Level_321Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape3Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape3ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3ExplosionObjects3[i].setParticleSize1(0.5 * (( gdjs.Level_321Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape3Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDShape4Objects2, gdjs.Level_321Code.GDShape4Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape4Objects3Objects) != 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDShape4Objects3 */
gdjs.Level_321Code.GDShape4ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape4ExplosionObjects3Objects, (( gdjs.Level_321Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape4Objects3[0].getPointX("Center")), (( gdjs.Level_321Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape4Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape4ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4ExplosionObjects3[i].setParticleSize1(0.5 * (( gdjs.Level_321Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDShape4Objects3[0].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects3);
gdjs.copyArray(gdjs.Level_321Code.GDShape1Objects2, gdjs.Level_321Code.GDShape1Objects3);

gdjs.copyArray(gdjs.Level_321Code.GDShape2Objects2, gdjs.Level_321Code.GDShape2Objects3);

gdjs.copyArray(gdjs.Level_321Code.GDShape3Objects2, gdjs.Level_321Code.GDShape3Objects3);

gdjs.copyArray(gdjs.Level_321Code.GDShape4Objects2, gdjs.Level_321Code.GDShape4Objects3);

{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level_321Code.GDObstacleObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects2});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Level_321Code.GDObstacleObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level_321Code.GDButtonTryAgainObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level_321Code.GDButtonTryAgainObjects1});gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDButtonTryAgainObjects1, gdjs.Level_321Code.GDButtonTryAgainObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.Level_321Code.GDHomeObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.Level_321Code.GDHomeObjects1});gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDHomeObjects1, gdjs.Level_321Code.GDHomeObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDHomeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHomeObjects2[i].setAnimationName("HomePressed");
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Level_321Code.GDHomeObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Meet-You-ThereSapajou-No-Copyright-Music.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHomeObjects1[i].hide();
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(0, -(450), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].addForce(0, 450, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3 - 0.001 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score")), "ShapeCreation");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDShape1Objects1.length = 0;

gdjs.Level_321Code.GDShape2Objects1.length = 0;

gdjs.Level_321Code.GDShape3Objects1.length = 0;

gdjs.Level_321Code.GDShape4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects1ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects1Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects1[i].rotate(90, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects1[i].addPolarForce(90, 100 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects1[i].addPolarForce(90, 100 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects1[i].addPolarForce(90, 100 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects1[i].addPolarForce(90, 100 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects1);

gdjs.Level_321Code.forEachTotalCount2 = 0;
gdjs.Level_321Code.forEachObjects2.length = 0;
gdjs.Level_321Code.forEachCount0_2 = gdjs.Level_321Code.GDShape1Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount0_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape1Objects1);
gdjs.Level_321Code.forEachCount1_2 = gdjs.Level_321Code.GDShape2Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount1_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape2Objects1);
gdjs.Level_321Code.forEachCount2_2 = gdjs.Level_321Code.GDShape3Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount2_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape3Objects1);
gdjs.Level_321Code.forEachCount3_2 = gdjs.Level_321Code.GDShape4Objects1.length;
gdjs.Level_321Code.forEachTotalCount2 += gdjs.Level_321Code.forEachCount3_2;
gdjs.Level_321Code.forEachObjects2.push.apply(gdjs.Level_321Code.forEachObjects2,gdjs.Level_321Code.GDShape4Objects1);
for(gdjs.Level_321Code.forEachIndex2 = 0;gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachTotalCount2;++gdjs.Level_321Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
gdjs.Level_321Code.GDShape1Objects2.length = 0;

gdjs.Level_321Code.GDShape2Objects2.length = 0;

gdjs.Level_321Code.GDShape3Objects2.length = 0;

gdjs.Level_321Code.GDShape4Objects2.length = 0;


if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2) {
    gdjs.Level_321Code.GDShape1Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2) {
    gdjs.Level_321Code.GDShape2Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2+gdjs.Level_321Code.forEachCount2_2) {
    gdjs.Level_321Code.GDShape3Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
else if (gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.forEachCount0_2+gdjs.Level_321Code.forEachCount1_2+gdjs.Level_321Code.forEachCount2_2+gdjs.Level_321Code.forEachCount3_2) {
    gdjs.Level_321Code.GDShape4Objects2.push(gdjs.Level_321Code.forEachObjects2[gdjs.Level_321Code.forEachIndex2]);
}
gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDShape1Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape2Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape3Objects2ObjectsGDgdjs_46Level_95321Code_46GDShape4Objects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.Level_321Code.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level_321Code.GDObstacleObjects1);

for(gdjs.Level_321Code.forEachIndex2 = 0;gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.GDObstacleObjects1.length;++gdjs.Level_321Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects2);
gdjs.Level_321Code.GDObstacleObjects2.length = 0;


gdjs.Level_321Code.forEachTemporary2 = gdjs.Level_321Code.GDObstacleObjects1[gdjs.Level_321Code.forEachIndex2];
gdjs.Level_321Code.GDObstacleObjects2.push(gdjs.Level_321Code.forEachTemporary2);
gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "killed.wav", false, 100, 1);
}}
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, Math.max(5 - 0.1 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score")), 0.5), "ObstacleCreation");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level_321Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level_321Code.GDLifeObjects1);
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level_321Code.GDMonsterObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMonsterObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonsterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMonsterObjects1[k] = gdjs.Level_321Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonsterObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Level_321Code.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level_321Code.GDLifeObjects1);
/* Reuse gdjs.Level_321Code.GDMonsterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level_321Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level_321Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level_321Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level_321Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level_321Code.GDShape4Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLifeObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonsterObjects1[i].setAnimationName("MonsterDead");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHomeObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects, runtimeScene, true, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDButtonTryAgainObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level_321Code.GDButtonTryAgainObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDButtonTryAgainObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDButtonTryAgainObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDButtonTryAgainObjects1[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Level_321Code.GDHomeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHomeObjects1Objects, runtimeScene, true, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHomeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHomeObjects1[i].setAnimationName("HomeNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Level_321Code.GDHomeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHomeObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHomeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHomeObjects1[i].setAnimationName("HomeHover");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getVariables().get("GameSpeed").add(7 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMonsterObjects1.length = 0;
gdjs.Level_321Code.GDMonsterObjects2.length = 0;
gdjs.Level_321Code.GDMonsterObjects3.length = 0;
gdjs.Level_321Code.GDMonsterObjects4.length = 0;
gdjs.Level_321Code.GDShape1Objects1.length = 0;
gdjs.Level_321Code.GDShape1Objects2.length = 0;
gdjs.Level_321Code.GDShape1Objects3.length = 0;
gdjs.Level_321Code.GDShape1Objects4.length = 0;
gdjs.Level_321Code.GDShape2Objects1.length = 0;
gdjs.Level_321Code.GDShape2Objects2.length = 0;
gdjs.Level_321Code.GDShape2Objects3.length = 0;
gdjs.Level_321Code.GDShape2Objects4.length = 0;
gdjs.Level_321Code.GDShape3Objects1.length = 0;
gdjs.Level_321Code.GDShape3Objects2.length = 0;
gdjs.Level_321Code.GDShape3Objects3.length = 0;
gdjs.Level_321Code.GDShape3Objects4.length = 0;
gdjs.Level_321Code.GDShape4Objects1.length = 0;
gdjs.Level_321Code.GDShape4Objects2.length = 0;
gdjs.Level_321Code.GDShape4Objects3.length = 0;
gdjs.Level_321Code.GDShape4Objects4.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects3.length = 0;
gdjs.Level_321Code.GDScoreObjects4.length = 0;
gdjs.Level_321Code.GDObstacleObjects1.length = 0;
gdjs.Level_321Code.GDObstacleObjects2.length = 0;
gdjs.Level_321Code.GDObstacleObjects3.length = 0;
gdjs.Level_321Code.GDObstacleObjects4.length = 0;
gdjs.Level_321Code.GDLifeObjects1.length = 0;
gdjs.Level_321Code.GDLifeObjects2.length = 0;
gdjs.Level_321Code.GDLifeObjects3.length = 0;
gdjs.Level_321Code.GDLifeObjects4.length = 0;
gdjs.Level_321Code.GDGameOverObjects1.length = 0;
gdjs.Level_321Code.GDGameOverObjects2.length = 0;
gdjs.Level_321Code.GDGameOverObjects3.length = 0;
gdjs.Level_321Code.GDGameOverObjects4.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects1.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects2.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects3.length = 0;
gdjs.Level_321Code.GDButtonTryAgainObjects4.length = 0;
gdjs.Level_321Code.GDHomeObjects1.length = 0;
gdjs.Level_321Code.GDHomeObjects2.length = 0;
gdjs.Level_321Code.GDHomeObjects3.length = 0;
gdjs.Level_321Code.GDHomeObjects4.length = 0;
gdjs.Level_321Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level_321Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level_321Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level_321Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level_321Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level_321Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level_321Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level_321Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level_321Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level_321Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level_321Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level_321Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level_321Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level_321Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level_321Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level_321Code.GDShape1ExplosionObjects4.length = 0;

gdjs.Level_321Code.eventsList5(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
