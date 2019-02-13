/*
 * Example plugin template
 */

jsPsych.plugins["draw_rectangle"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "draw_rectangle",
    parameters: {
      parameter_name: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: undefined
      },
      parameter_name: {
        type: jsPsych.plugins.parameterType.IMAGE,
        default_value: undefined
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // data saving
    var trial_data = {
      parameter_name: 'parameter value'
    };
    

    // end trial
    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
