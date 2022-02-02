import React, {useContext} from "react";
import ConfigContext from "../SiteView/context";

const Logo = ({ isDark = false, maxHeight = 150 }) => {

    const { id, meta, assets } = useContext(ConfigContext);

    return (
        <img
            className="logo"
            src={require(`../../data/${id}/assets/${isDark ? assets?.logo?.dark : assets?.logo.light}`)}
            alt={meta.title}
            style={{ maxHeight }}
        />
    );

};

export default Logo;