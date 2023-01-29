import React from 'react';
import blog1 from '../../Assests/Images/blog1.jpg';
import blog2 from '../../Assests/Images/blog2.jpg';
import { FcAlarmClock, FcBusinesswoman, FcComments } from 'react-icons/fc';

const Blog = () => {

    return (
        <div className='my-12 lg:px-32 py-12'>
            <h1 className="text-5xl text-center">Latest Blogs</h1>
            <div className="divider"></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-24'>
                <div className="card card-compact bg-white rounded-none">
                    <figure><img src={blog1} alt="Dress" className='h-80 w-full' /></figure>
                    <div className='flex justify-around items-center my-4'>
                        <div className='flex justify-between items-center'>
                            <FcBusinesswoman></FcBusinesswoman>
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FcComments></FcComments>
                            <p>35 Comments</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FcAlarmClock></FcAlarmClock>
                            <p>15th January, 2023</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">What To Wear For Spring: The Best Spring Outfits This Season</h2>
                        <p>A new season means new outfits, and we couldn't be more excited about that. But what do you do when the weather's cold in the morning, hot in the day… and cold again at night? The trick to putting a stylish spring outfit together is starting out with chic basics, and then updating your style for the season. Here are our top style tips on what to wear for spring:</p>
                    </div>
                </div>
                <div className="card card-compact bg-white rounded-none">
                    <figure><img src={blog2} alt="Dress" className='h-80 w-full' /></figure>
                    <div className='flex justify-around items-center my-4'>
                        <div className='flex justify-between items-center'>
                            <FcBusinesswoman></FcBusinesswoman>
                            <p>Posted by Moderator</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FcComments></FcComments>
                            <p>20 Comments</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FcAlarmClock></FcAlarmClock>
                            <p>22th January, 2023</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Winter Style: The Fashion Trends 2016-2017</h2>
                        <p>Hot spiced drinks, comfy sweaters and crisp frosty mornings' this winter season is all about stepping out in luxurious textures, bold colors and time-honoured silhouettes. Look no further for your winter style guide to 2016/2017. We've got you covered for all the essential trends of this chilly season.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;