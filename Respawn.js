// this script helps the player get back to where she started incase she has an adventurer inside her and 
// decided to fall off the Terrain limits
// the Terrain has been limited to 200X200 px due to simplicity of game concept

function Update() {
    if (transform.position.y < -20) { // if FP (player is falling below 20) then return

        transform.position.x = 28.50081;
        transform.position.y = 1.244849;
        transform.position.z = 25.34398;
        transform.rotation.x = 0;
        transform.rotation.y = 360;
        transform.rotation.z = 0;

    }
}
// basically primitive and simple- but handles the job at hand
