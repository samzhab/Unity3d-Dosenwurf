// this script 
static
var levelResult;

function Update() { // this is executed every frame

    levelResult = Throw.SCORE_COUNT; // get value of' score count' from the script - 'throw'


    //print (levelResult);
    switch (Menus.GAME_LEVEL) // give the corresponding score message
    {
    case 2:
        GameObject.Find("gui_Result").guiText.text = "" + levelResult + "/" + "6";
        break;

    case 3:
        GameObject.Find("gui_Result").guiText.text = "" + levelResult + "/" + "12";
        break;

    case 4:
        GameObject.Find("gui_Result").guiText.text = "" + levelResult + "/" + "15";
        break;


    }


}
