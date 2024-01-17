import React from 'react';
import '../styles/AboutMe.css';
import pic from "../../assets/pic.webp"

const AboutMe = () => {
    return(
        <div id={"about-section"} className={"w-full flex flex-col items-center"}>
            <div className={"w-3/5 mt-24 mb-32"}>
                <h1 className={"mb-8 text-2xl underline underline-offset-4"}>About me</h1>
                <div className={""}>
                   <div className={"image-wrapper hidden lg:block mr-16 rounded-3xl lg:float-left"}>
                       <img
                       className={"image rounded-3xl"}
                       src={pic}
                       alt={""}/>
                   </div>
                    <div className={"w-full text-lg lg:text-xl leading-7 text-justify"}>
                    Hello! I'm Lubabalo Zenzile, a passionate Computer Science graduate with a keen interest in crafting innovative solutions across the software development spectrum. My journey in the world of programming began at the University of the Western Cape, where I earned my <b>Bachelor's degree in Computer Science.</b><br/>

                        <br/>

                        <br/>In my professional journey, I have had the privilege of working as a Web Developer, contributing to various projects that required not only technical proficiency but also effective communication and collaboration. I take pride in breaking down complex projects into manageable tasks, creating efficient timelines, and ensuring the seamless integration of visual elements into responsive and user-friendly designs.<br/>

                        <br/>

                        <br/>Away from the screen, I indulge in the world of literature, constantly exploring new realms through reading. My evenings often involve diving into captivating documentaries, a medium I find both informative and entertaining.<br/>

                        <br/>
                        <br/>I'm excited about the possibilities that lie ahead in the coding universe and look forward to collaborating on innovative projects. Let's connect and embark on this coding journey together!

                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;