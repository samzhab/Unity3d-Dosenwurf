// this script basically throws the ball around and change rendered camera to capture close impact of ball on tin cans [UNDONE]
static
var SCORE_COUNT = 0;
var closeCamera: Camera;
static
var ballSpeed = 100;
var ballPrefab: Transform;
var outOfBalls = false;
//var throwSound : AudioClip;
//var hitSound : AudioClip;
//var fallSound : AudioClip;

GameObject.Find("gui_ScoreCount").guiText.text = "" + 0;

function Update() {

    // find out if the fire button is pressed
    if (Input.GetButtonDown("Fire1")) {
        //audio.PlayOneShot(throwSound); which I will come up with as soon 

        // create the prefab
        if (Collisions.BALL_COUNT > 0) {
            //print (SCORE_COUNT);
            var ball = Instantiate(ballPrefab, transform.position, Quaternion.identity);
            // add force to the prefab

            ball.rigidbody.AddForce(transform.forward * ballSpeed);
            Collisions.BALL_COUNT--;
            //print ("You now Have "+Collisions.BALL_COUNT+" Balls Left");
            //changeCam();
        }


        if (Collisions.BALL_COUNT == 0) {
            if (GameObject.Find("ballCrate")) {
                //please pick up balls to continue
            } else
                outOfBalls = true;
        }

    }

    if (outOfBalls == true) {
        showResult();
    }
}

function showResult() {

    yield new WaitForSeconds(4);
    Application.LoadLevel(1);

}

function changeCam() { // function to change camera view [UNDONE] 
    print("camera change");
    //closeCamera.;


}
//@script RequireComponent (closeCamera)
