// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_ADPLUG= {};
var backend_AdPlug = (function(Module) {