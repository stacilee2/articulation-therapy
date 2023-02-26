import React from 'react'

function Home() {

  return (
   <>
   <img className="profile-photo" src={require("/Users/stacipayne/articulation-therapy/src/Profile.png")} alt="Profile pic" />
   <p className="home">My name is Staci Rosales and I've been a Speech-Language Pathologist for 7 years. I graduated from the University of Oklahoma HSC with a Master's in Speech-Language Pathology in 2015. I have been working with school-age clients since I graduated and found that targeting articulation within literacy activities to be the most effective for generalization in the classroom. This website will offer a variety of targets with recommended books as well as links to <a href="http://localhost:3008/games">Games</a> to provide positive reinforcement.</p>
   <p className="home">An added feature to this site is the <a href="http://localhost:3008/addsound">Add Sound</a> page where you can make your own sound cards to individualize your sessions! </p>
   </>
  )
}

export default Home;
