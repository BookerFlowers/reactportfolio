import React from "react";
// using call link function to create a clickable link to call me
function CallLink() {


    return (
        <div>
            <a href="tel:14485006239" className="hover:text-red-600" onClick={CallLink}>Call Me: 448-500-6239</a>

        </div>
    );
}

export default CallLink
