import CourseCard from "../components/CourseCard";

const CourseContent = () => {
    const dataCourse = [
        {
            title: 'Programming Laravel',
            desc: 'Getting started with laravel 9',
            batch: 'August 2023',
            mentor: 'Alex Bizer',
        },
        {
            title: 'Fundamentals of Python',
            desc: 'Learn the basics of Python',
            batch: 'August 2023',
            mentor: 'Profesor David Johnson',
        },
        {
            title: 'Web Development',
            desc: 'Master web development',
            batch: 'August 2023',
            mentor: 'Dr. Sarah Thompson ',
        },
        {
            title: 'Data Science and ML',
            desc: 'Dive into data science and ml',
            batch: 'September 2023',
            mentor: 'Dr. Robert Chen',
        },
        {
            title: 'Mobile App Development',
            desc: "Build cross-platform mobile apps",
            batch: 'September 2023',
            mentor: 'Emily Garcia',
        },
        {
            title: 'Cybersecurity and Hacking',
            desc: 'Learn about computer security and hacking',
            batch: 'October 2023',
            mentor: 'Dr. Michael Roberts',
        },
        {
            title: 'Data Visualization',
            desc: ' Transform data into interactive visualizations',
            batch: 'October 2023',
            mentor: 'Prof. Laura Hernandez',
        },
        {
            title: 'Blockchain Technology',
            desc: 'Learn blockchain technology',
            batch: 'October 2023',
            mentor: 'Dr. Alexander Kim',
        },
    ]

    return ( 
        <div className="grid w-full h-full grid-rows-1 gap-5 px-5 py-5 md:px-12 bg-slate-200 md:grid-cols-4">
            {dataCourse.map((data) => (
                <CourseCard 
                key={data.id}
                title={data.title} 
                desc={data.desc} 
                batch={data.batch}
                mentor={data.mentor}/>
            ))}
        </div>
     );
}
 
export default CourseContent;