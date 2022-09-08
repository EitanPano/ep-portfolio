export const BurgerMenu = () => {
    return (
        <>
            <input type="checkbox" id="burger-toggle" name="burger-toggle" className="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger">
                <div className="bars">
                    <div className="bar burger-bar"></div>
                    <div className="bar burger-bar"></div>
                    <div className="bar burger-bar"></div>
                </div>
            </label>
        </>
    );
};
