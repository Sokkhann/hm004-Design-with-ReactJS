import CardComponent from "./CardComponent"
import FeedbackComponent from "./FeedbackComponent"

const MainComponent = () => {
    return (
        <div>
            <p class="text-5xl text-center m-8 font-bold text-cyan-800">Product Lists</p>
            <CardComponent/>
            <p class="text-5xl text-center m-8 font-bold text-cyan-800">Feedback</p>
            <FeedbackComponent/>
        </div>
    )
}

export default MainComponent