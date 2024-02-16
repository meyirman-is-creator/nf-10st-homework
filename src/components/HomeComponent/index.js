import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";

function HomeComponent() {
    return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home Component</h5>
            <NewTweet/>
            <TweetsList/>
        </div>
    )
}
export default HomeComponent;