import React from "react";
import Star from "./Star";

export default function Stars({count = 0}) {
    if (count < 1 || count > 5) {
        return '';
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {[...Array(count)].map((e, i) =>
                <li key={i}><Star/></li>
            )}
        </ul>
    );
}
