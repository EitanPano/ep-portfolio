export const BurgerMenu = () => {
    return (
        <>
            <input type="checkbox" id="burger-toggle" name="burger-toggle" className="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger">
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </label>
        </>
    );
};
