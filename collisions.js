// this script is used to detect contact between objects

static var BALL_COUNT=0; // initially no balls on hand

function OnControllerColliderHit (hit : ControllerColliderHit)
{
	if (hit.gameObject.tag == "ballCrate"){
		// remove the crate once the balls have been taken
		Destroy(hit.gameObject);
		BALL_COUNT+=3;	// picked 3 balls to throw
		GameObject.Find ("gui_BallCount").guiText.text= ""+BALL_COUNT;
		

	}
	
}

var rayCastLength = 4; // this much length between First Person and another gameObject
function Update ()
{
	var hit:RaycastHit;
	if (Physics.Raycast(transform.position,transform.forward,hit,rayCastLength))
	{
		if (hit.collider.gameObject.tag == "door") // if the ray casted from the First Person (Player) hits the door
		{
			hit.collider.gameObject.animation.Play("door_open"); // then the door should open
			hit.collider.gameObject.audio.Play(); // and play the open door audio
		}
	}
	
	GameObject.Find ("gui_BallCount").guiText.text= ""+BALL_COUNT;
	
}
//@script RequireComponent(AudioSource)

