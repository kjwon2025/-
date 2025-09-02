import React from "react";
import $ from "jquery";

function UseJquery(){
    function input_alert(e){
        let input_val = $("#inputId").val();
        alert(input_val);
    }
    return(
        <div>
            <input id="inputId" name="inputName" />
            <button id="buttonId" onClick={(e) => input_alert(e)}>클릭!</button>
        </div>
    )
}


export default UseJquery;