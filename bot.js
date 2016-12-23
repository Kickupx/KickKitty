/**
 * Global Settings
 * These should be added to settings_declaration
 */
var RGBStep = 4;
var FirstValidRGB = 1 * RGBStep;
var LuaIdle = 0x56;

/**
 * Keep the files required for auto installation mode alive for bot duration
 */
var kickbot_paths = {};

/**
 * @type GUI.Window
 */
var wow_window = GUI.singleWindow("World of Warcraft");

//wow_window is now initialized and ready for use
var communication_frame_pos = tryGuessLoc();
if(!communication_frame_pos)
    throw "Could not find position of Addon frame";
else
    Log.notify("Found Addon frame at (", Math.floor(communication_frame_pos.x), ", ", Math.floor(communication_frame_pos.y), ")");

var first_color = wow_window.pixelColor(communication_frame_pos);
printColor("Current color: ", first_color);

//Starting actual loop
var last_color = first_color;

for(;;) {
    var color = wow_window.pixelColor(communication_frame_pos);
    
    //Do not spam the button
    if(color.r === last_color.r
        && color.g === last_color.g
        && color.b === last_color.b)
        continue;
    
    printColor("Found new color: ", color);

    last_color = color;

    var spell_name_idx = (color.g - FirstValidRGB) / RGBStep;
    var target_idx = (color.r - FirstValidRGB) / RGBStep;
    var keyOrd = color.b;

    eventImageFound(spell_name_idx, target_idx, keyOrd);
}

function eventImageFound(spell_idx, target_idx, keyOrd) {
    if(keyOrd <= 0 && (target_idx > 6 || spell_idx < 0 || spell_idx > 20))
        return;

    if(keyOrd != 0 && keyOrd != LuaIdle) {
        print("Sending key ", String.fromCharCode(keyOrd));
        wow_window.keyboardCommand({
            key: String.fromCharCode(keyOrd)
        });
    }
}

function tryGuessLoc() {
    var pos = wow_window.findFirstPixel({
        r: 0, g: 255, b: 0
    });

    return pos;
}

function printColor(prefix, color) {
    print(prefix, "(", 
    first_color.r, ", ", 
    first_color.g, ", ", 
    first_color.b, ")");
}