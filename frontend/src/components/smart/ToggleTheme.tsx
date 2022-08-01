import { useEffect, useRef } from "react";


export const ToggleTheme = ({onSetTheme, preferredTheme}:any) => {

    const ref:any = useRef(null)

    useEffect(() => {
        if (preferredTheme && preferredTheme === 'dark') {
            ref.current.checked = true;
        }
    },  [])
    

    return (
        <div className='nav-link'>
            <input ref={ref} className="tgl tgl-skewed" id="cb3" type="checkbox" />
            <label
                onClick={() => onSetTheme()}
                htmlFor="cb3"
                className="tgl-btn"
                data-tg-off={"🌞"}
                data-tg-on={"🌙"}
            />
        </div>
    );
};
