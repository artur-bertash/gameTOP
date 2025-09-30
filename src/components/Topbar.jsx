function Header({currectScore, bestScore}) {
    return (
        <div>
            <h1>Avatar Aang game</h1>
            <h3>Click on images, but don't click on the same one twice!</h3>
            <h3>Current score: {currectScore}. Best score: {bestScore}</h3>
        </div>
    )

}

export default Header