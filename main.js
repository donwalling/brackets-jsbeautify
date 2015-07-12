/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item. Inserts "Hello, world!" at cursor pos. */
define(function(require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");
    var windowsCommand = {
        key: 'Opt-Cmd-B',
        platform: 'win'
    };
    var macCommand = {
        key: 'Opt-Cmd-B',
        platform: 'mac'
    };
    var command = [windowsCommand, macCommand];


    // Function to run when the menu item is clicked
    function handleJSBeautify() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange("Hello, world!", insertionPos);
        }
    }


    // First, register a command - a UI-less object associating an id to a handler
    var COMMAND_ID = "donwalling.jsbeautify"; // package-style naming to avoid collisions
    CommandManager.register("Run JSBeautify", COMMAND_ID, handleJSBeautify);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    //var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);Hello, world!
    menu.addMenuDivider();
    menu.addMenuItem(COMMAND_ID, command);
});
