import React from 'react';

export const ToggleTheme = () => {
    return (
        <div className='nav-link'>
            <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
            <label
                onClick={() => {}}
                htmlFor="cb3"
                className="tgl-btn"
                data-tg-off="🌞"
                data-tg-on="🌚"
            />
        </div>
    );
};
