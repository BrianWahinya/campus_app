import Main from "./Main";
import PopularCourses from "./PopularCourses";
import RegisterNow from "./RegisterNow";
import UpcomingActivities from "./UpcomingActivities";
import UpcomingNews from "./UpcomingNews";
import Welcome from "./Welcome";

const Home = () => {
  return <>
    <Main />
    <Welcome />
    <PopularCourses />
    <RegisterNow />
    <UpcomingActivities />
    <UpcomingNews />
  </>
}

export default Home