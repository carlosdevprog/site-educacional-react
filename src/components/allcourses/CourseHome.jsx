
import Back from './../back/Back';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';

const CourseHome = () => {
    return (
        <>
            <Back title="Cursos" />
            <CoursesCard />
            <OnlineCourses/>
        </>
    )
}

export default CourseHome