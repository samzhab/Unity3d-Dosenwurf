// this script checks for tin cans that hit the floor and updates the score sheet
var targetRoot : GameObject;


var hitSound : AudioClip;
var fallSound : AudioClip;

function OnCollisionEnter(theObject : Collision) {
//print (theObject.gameObject);

if (theObject.gameObject.name == "ball(Clone)" || theObject.gameObject.name == "wall" || theObject.gameObject.name == "floor"){
audio.PlayOneShot(hitSound);				//Play hit-by-ball,  if the tin can is  hit by a ball or hits floor and wall
		}
		
if(theObject.gameObject.name=="scoreCube"){ // if the tin can hits the floor then add Point to Score
Destroy(targetRoot);
Throw.SCORE_COUNT++;

GameObject.Find ("gui_ScoreCount").guiText.text= ""+Throw.SCORE_COUNT; // Update Score Sheet


}

 
}


@script RequireComponent(AudioSource)
