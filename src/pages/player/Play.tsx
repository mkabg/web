export default function Play() {
  return (
    <div>
        <p>
            {/* {showTimer}
            {showRiddle} */}
            <button onClick={showHint}>Int 💡</button>
            </p>
        <input type="text" name="enswer" id="enswer">Your Enswer</input>
    </div>
  )
}

// const showTimer = () => {}
// const showRiddle = () => {}
const showHint = () => {}