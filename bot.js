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
var wow_window = findWindow();

//wow_window is now initialized and ready for use
var communication_frame_pos = findCommunicationFrame();
if(!communication_frame_pos)
    throw "Could not find position of Addon frame";
else
    Log.notify("Found Addon frame at (", Math.floor(communication_frame_pos.x), ", ", Math.floor(communication_frame_pos.y), ")");

var first_color = wow_window.pixelColor(communication_frame_pos);
printColor("Current color: ", first_color);

//Save initial color retrieved
var last_color = first_color;

for(;;) {
    var color = wow_window.pixelColor(communication_frame_pos);
    
    //Do not spam commands
    if(color.r === last_color.r
        && color.g === last_color.g
        && color.b === last_color.b)
        continue;
    
    printColor("Color changed to: ", color);

    last_color = color;

    var spell_name_idx = (color.g - FirstValidRGB) / RGBStep;
    var target_idx = (color.r - FirstValidRGB) / RGBStep;
    var key = color.b;

    dispatchCommand(spell_name_idx, target_idx, key);
}

function dispatchCommand(spell_idx, target_idx, key) {
    if(key <= 0 && (target_idx > 6 || spell_idx < 0 || spell_idx > 20))
        return;

    if(key != 0 && key != LuaIdle) {
        var key = String.fromCharCode(key);
        print("Sending key ", key);

        try {
            wow_window.keyboardCommand({
                key: key
            });
        } catch(e) {
            //If Lua addon sends wrong keys we get here
        }
    }
}

function findWindow() {
    return GUI.singleWindow("World of Warcraft");
}

function findCommunicationFrame() {
    var pos = wow_window.findFirstPixel({
        r: 0, g: 255, b: 0
    });

    if(pos) {
        pos.x += 2;
        pos.y += 2;
    }

    return pos;
}

function printColor(prefix, color) {
    print(prefix, "(", 
    first_color.r, ", ", 
    first_color.g, ", ", 
    first_color.b, ")");
}