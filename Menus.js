// this script is attached to the menu items and helps the player navigate through the different options available

Screen.showCursor = true; // system cursor;
static
var GAME_LEVEL = 0; // this is the mainmenu
var isQuitBtn = false;
var isNextLevelBtn = false;
var isPlayAgainBtn = false;

var levelToLoad: int;
var normalTexture: Texture2D;
var rollOverTexture: Texture2D;


function OnMouseEnter() {
    guiTexture.texture = rollOverTexture; // when player rolls mouse over the menu item display effect
}

function OnMouseExit() {
    guiTexture.texture = normalTexture; // and return to normal
}

function OnMouseUp() {

    yield new WaitForSeconds(0.35); // wait for 35 micro secs - this helps the player get a feel of something being processed but really fast

    if (isQuitBtn) {
        Application.Quit(); // quits the game
    } else if (isNextLevelBtn) {
        if (GAME_LEVEL < 4) {
            Throw.SCORE_COUNT = 0;
            Collisions.BALL_COUNT = 0;
            Application.LoadLevel(GAME_LEVEL + 1); // load next level until the last level
            GAME_LEVEL++;
        } else
            GameObject.Find("nextlevelBtn").active = false; // no more levels

    } else if (isPlayAgainBtn) {
        Throw.SCORE_COUNT = 0;
        Collisions.BALL_COUNT = 0;
        Application.LoadLevel(GAME_LEVEL);
    } else {
        Application.LoadLevel(levelToLoad);

        GAME_LEVEL = levelToLoad;
        Throw.SCORE_COUNT = 0; // reset score counter if other levels have been played before
        Collisions.BALL_COUNT = 0; // lose all balls on hand - actually not necessary but only for consistency sake
    }

}


//@script RequireComponent(AudioClip)
